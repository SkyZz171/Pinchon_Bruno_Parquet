import { FormEvent, useEffect, useState } from 'react';
import { Lock, LogOut, Mail, Phone, MapPin, Calendar, Inbox, Loader2, KeyRound } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Demande = {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  type_projet: string;
  surface: string;
  message: string;
  consentement_rgpd: boolean;
  created_at: string;
};

const TYPES_LABEL: Record<string, string> = {
  pose: 'Pose de parquet neuf',
  renovation: 'Rénovation / ponçage',
  entretien: 'Entretien / finition',
  autre: 'Autre',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [listError, setListError] = useState('');

  const [selected, setSelected] = useState<Demande | null>(null);

  // Changer le mot de passe
  const [showPwd, setShowPwd] = useState(false);
  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [changingPwd, setChangingPwd] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('pinchon-admin');
    if (saved === '1') setAuthed(true);
  }, []);

  const logout = () => {
    sessionStorage.removeItem('pinchon-admin');
    setAuthed(false);
    setDemandes([]);
    setSelected(null);
  };

  const loadDemandes = async () => {
    setLoadingList(true);
    setListError('');
    const stored = sessionStorage.getItem('pinchon-admin-pwd');
    if (!stored) {
      setListError('Session expirée, veuillez vous reconnecter.');
      setAuthed(false);
      setLoadingList(false);
      return;
    }
    const { data, error } = await supabase.rpc('admin_lister_demandes', {
      mot_de_passe: stored,
    });
    setLoadingList(false);
    if (error) {
      setListError('Impossible de charger les demandes.');
      return;
    }
    setDemandes((data as Demande[]) ?? []);
  };

  // À la première connexion réussie, on stocke le mot de passe en session
  // pour pouvoir appeler admin_lister_demandes ensuite.
  const handleLoginWithStore = async (e: FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError('');
    const { data, error } = await supabase.rpc('admin_verifier', {
      mot_de_passe: password,
    });
    setLoggingIn(false);
    if (error || !data) {
      setLoginError('Mot de passe incorrect.');
      return;
    }
    sessionStorage.setItem('pinchon-admin', '1');
    sessionStorage.setItem('pinchon-admin-pwd', password);
    setAuthed(true);
    setPassword('');
  };

  const handleChangePwd = async (e: FormEvent) => {
    e.preventDefault();
    setChangingPwd(true);
    setPwdError('');
    setPwdMsg('');
    const { error } = await supabase.rpc('admin_changer_mot_de_passe', {
      ancien: oldPwd,
      nouveau: newPwd,
    });
    setChangingPwd(false);
    if (error) {
      setPwdError(error.message ?? 'Échec du changement de mot de passe.');
      return;
    }
    sessionStorage.setItem('pinchon-admin-pwd', newPwd);
    setPwdMsg('Le mot de passe a été mis à jour.');
    setOldPwd('');
    setNewPwd('');
  };

  useEffect(() => {
    if (authed) loadDemandes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  if (!authed) {
    return (
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-32">
        <div className="rounded-2xl border border-lin-200 bg-lin-50 p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Lock className="h-6 w-6 text-chene-600" strokeWidth={1.5} />
            <h1 className="text-2xl text-anthracite-900">Espace administrateur</h1>
          </div>
          <p className="mt-2 text-sm text-anthracite-600">
            Accès réservé à Bruno Pinchon. Saisissez votre mot de passe pour
            consulter les demandes de devis.
          </p>
          <form onSubmit={handleLoginWithStore} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-anthracite-700" htmlFor="pwd">
                Mot de passe
              </label>
              <input
                id="pwd"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-lin-200 bg-lin-50 px-4 py-3 text-anthracite-900 focus:border-chene-500 focus:outline-none focus:ring-1 focus:ring-chene-500"
                placeholder="••••••••"
              />
            </div>
            {loginError && (
              <p className="rounded-lg bg-terre-500/10 px-4 py-3 text-sm text-terre-600">
                {loginError}
              </p>
            )}
            <button
              type="submit"
              disabled={loggingIn}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-chene-600 px-6 py-3 font-medium text-lin-50 transition-colors hover:bg-chene-700 disabled:opacity-70"
            >
              {loggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Vérification…
                </>
              ) : (
                <>
                  <KeyRound className="h-5 w-5" />
                  Se connecter
                </>
              )}
            </button>
          </form>
          <p className="mt-4 text-xs text-anthracite-600/70">
            Mot de passe par défaut : <code className="rounded bg-lin-100 px-1.5 py-0.5">pinchon-admin</code>.
            Pensez à le changer après votre première connexion.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-chene-600">
            Administration
          </p>
          <h1 className="mt-2 text-3xl text-anthracite-900 sm:text-4xl">
            Demandes de devis
          </h1>
        </div>
        <button
          onClick={logout}
          className="inline-flex items-center gap-2 rounded-full border border-anthracite-600/30 px-5 py-2.5 text-sm text-anthracite-700 transition-colors hover:bg-lin-100"
        >
          <LogOut className="h-4 w-4" />
          Se déconnecter
        </button>
      </div>

      {loadingList ? (
        <div className="flex items-center gap-3 py-20 text-anthracite-600">
          <Loader2 className="h-5 w-5 animate-spin" />
          Chargement des demandes…
        </div>
      ) : listError ? (
        <p className="mt-8 rounded-lg bg-terre-500/10 px-4 py-3 text-sm text-terre-600">
          {listError}
        </p>
      ) : demandes.length === 0 ? (
        <div className="mt-12 flex flex-col items-center rounded-2xl border border-lin-200 bg-lin-50 py-16 text-center">
          <Inbox className="h-10 w-10 text-chene-400" strokeWidth={1.5} />
          <p className="mt-4 text-anthracite-700">
            Aucune demande de devis pour le moment.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-6 text-sm text-anthracite-600">
            {demandes.length} demande{demandes.length > 1 ? 's' : ''} reçue{demandes.length > 1 ? 's' : ''}.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-3">
              {demandes.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelected(d)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${
                    selected?.id === d.id
                      ? 'border-chene-500 bg-chene-600/5'
                      : 'border-lin-200 bg-lin-50 hover:border-chene-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-anthracite-900">{d.nom}</span>
                    <span className="text-xs text-anthracite-600">
                      {formatDate(d.created_at)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-anthracite-700">
                    {TYPES_LABEL[d.type_projet] ?? d.type_projet}
                    {d.ville ? ` — ${d.ville}` : ''}
                  </p>
                </button>
              ))}
            </div>

            <div>
              {selected ? (
                <div className="rounded-2xl border border-lin-200 bg-lin-50 p-7">
                  <h2 className="text-2xl text-anthracite-900">{selected.nom}</h2>
                  <p className="mt-1 text-sm text-anthracite-600">
                    Demande du {formatDate(selected.created_at)}
                  </p>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 text-chene-600" />
                      <div>
                        <dt className="text-anthracite-600">E-mail</dt>
                        <dd>
                          <a
                            href={`mailto:${selected.email}`}
                            className="text-anthracite-900 underline decoration-chene-300 underline-offset-2 hover:text-chene-700"
                          >
                            {selected.email}
                          </a>
                        </dd>
                      </div>
                    </div>
                    {selected.telephone && (
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 text-chene-600" />
                        <div>
                          <dt className="text-anthracite-600">Téléphone</dt>
                          <dd>
                            <a
                              href={`tel:${selected.telephone.replace(/\s/g, '')}`}
                              className="text-anthracite-900 underline decoration-chene-300 underline-offset-2 hover:text-chene-700"
                            >
                              {selected.telephone}
                            </a>
                          </dd>
                        </div>
                      </div>
                    )}
                    {selected.ville && (
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 text-chene-600" />
                        <div>
                          <dt className="text-anthracite-600">Ville</dt>
                          <dd className="text-anthracite-900">{selected.ville}</dd>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 text-chene-600" />
                      <div>
                        <dt className="text-anthracite-600">Type de projet</dt>
                        <dd className="text-anthracite-900">
                          {TYPES_LABEL[selected.type_projet] ?? selected.type_projet}
                        </dd>
                      </div>
                    </div>
                    {selected.surface && (
                      <div>
                        <dt className="text-anthracite-600">Surface</dt>
                        <dd className="mt-1 text-anthracite-900">{selected.surface}</dd>
                      </div>
                    )}
                  </dl>

                  <div className="mt-6">
                    <p className="text-sm text-anthracite-600">Message</p>
                    <p className="mt-2 whitespace-pre-line rounded-xl bg-lin-100 p-4 leading-relaxed text-anthracite-800">
                      {selected.message}
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-anthracite-600/70">
                    Consentement RGPD recueilli le {formatDate(selected.created_at)}.
                  </p>
                </div>
              ) : (
                <div className="flex h-full min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-lin-200 text-sm text-anthracite-600">
                  Sélectionnez une demande pour en voir le détail.
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <div className="mt-16 border-t border-lin-200 pt-10">
        <button
          onClick={() => setShowPwd((v) => !v)}
          className="inline-flex items-center gap-2 text-sm font-medium text-chene-700 hover:text-chene-600"
        >
          <KeyRound className="h-4 w-4" />
          {showPwd ? 'Masquer le changement de mot de passe' : 'Changer le mot de passe'}
        </button>
        {showPwd && (
          <form onSubmit={handleChangePwd} className="mt-5 max-w-md space-y-4 rounded-2xl border border-lin-200 bg-lin-50 p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-anthracite-700" htmlFor="oldpwd">
                Mot de passe actuel
              </label>
              <input
                id="oldpwd"
                type="password"
                required
                value={oldPwd}
                onChange={(e) => setOldPwd(e.target.value)}
                className="w-full rounded-lg border border-lin-200 bg-lin-50 px-4 py-3 text-anthracite-900 focus:border-chene-500 focus:outline-none focus:ring-1 focus:ring-chene-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-anthracite-700" htmlFor="newpwd">
                Nouveau mot de passe (6 caractères min.)
              </label>
              <input
                id="newpwd"
                type="password"
                required
                minLength={6}
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                className="w-full rounded-lg border border-lin-200 bg-lin-50 px-4 py-3 text-anthracite-900 focus:border-chene-500 focus:outline-none focus:ring-1 focus:ring-chene-500"
              />
            </div>
            {pwdError && (
              <p className="rounded-lg bg-terre-500/10 px-4 py-3 text-sm text-terre-600">
                {pwdError}
              </p>
            )}
            {pwdMsg && (
              <p className="rounded-lg bg-chene-600/10 px-4 py-3 text-sm text-chene-700">
                {pwdMsg}
              </p>
            )}
            <button
              type="submit"
              disabled={changingPwd}
              className="inline-flex items-center gap-2 rounded-full bg-chene-600 px-6 py-3 text-sm font-medium text-lin-50 transition-colors hover:bg-chene-700 disabled:opacity-70"
            >
              {changingPwd ? <Loader2 className="h-4 w-4 animate-spin" /> : <KeyRound className="h-4 w-4" />}
              Mettre à jour
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

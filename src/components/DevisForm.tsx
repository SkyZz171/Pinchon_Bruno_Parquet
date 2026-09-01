import { FormEvent, useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const TYPES = [
  { value: 'pose', label: 'Pose de parquet neuf' },
  { value: 'renovation', label: 'Rénovation / ponçage' },
  { value: 'entretien', label: 'Entretien / finition' },
  { value: 'autre', label: 'Autre / je ne sais pas encore' },
];

export default function DevisForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    type_projet: 'pose',
    surface: '',
    message: '',
    consentement_rgpd: false,
  });

  const update = (key: keyof typeof form, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.consentement_rgpd) {
      setErrorMsg('Merci de cocher la case de consentement pour envoyer votre demande.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMsg('');

    const { error } = await supabase.from('demandes_devis').insert({
      nom: form.nom.trim(),
      email: form.email.trim(),
      telephone: form.telephone.trim(),
      ville: form.ville.trim(),
      type_projet: form.type_projet,
      surface: form.surface.trim(),
      message: form.message.trim(),
      consentement_rgpd: form.consentement_rgpd,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(
        "Votre demande n’a pas pu être envoyée. Vous pouvez réessayer ou nous appeler directement."
      );
      return;
    }
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-chene-300/50 bg-lin-100 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-chene-600" strokeWidth={1.5} />
        <h3 className="mt-4 text-2xl text-anthracite-900">Demande bien reçue</h3>
        <p className="mx-auto mt-3 max-w-md text-anthracite-700">
          Merci {form.nom.split(' ')[0]}. Bruno revient vers vous rapidement pour
          échanger sur votre projet et convenir d’une visite si besoin.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-lin-200 bg-lin-50 px-4 py-3 text-anthracite-900 placeholder:text-anthracite-600/50 focus:border-chene-500 focus:outline-none focus:ring-1 focus:ring-chene-500';
  const labelClass = 'mb-1.5 block text-sm font-medium text-anthracite-700';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="nom">
            Nom et prénom <span className="text-terre-500">*</span>
          </label>
          <input
            id="nom"
            required
            value={form.nom}
            onChange={(e) => update('nom', e.target.value)}
            className={inputClass}
            placeholder="Marie Durand"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            E-mail <span className="text-terre-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            placeholder="marie.durand@email.fr"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="telephone">
            Téléphone
          </label>
          <input
            id="telephone"
            value={form.telephone}
            onChange={(e) => update('telephone', e.target.value)}
            className={inputClass}
            placeholder="06 00 00 00 00"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="ville">
            Ville / code postal
          </label>
          <input
            id="ville"
            value={form.ville}
            onChange={(e) => update('ville', e.target.value)}
            className={inputClass}
            placeholder="Lyon, 69000"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="type_projet">
            Type de projet <span className="text-terre-500">*</span>
          </label>
          <select
            id="type_projet"
            value={form.type_projet}
            onChange={(e) => update('type_projet', e.target.value)}
            className={inputClass}
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="surface">
            Surface approximative
          </label>
          <input
            id="surface"
            value={form.surface}
            onChange={(e) => update('surface', e.target.value)}
            className={inputClass}
            placeholder="environ 40 m²"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Votre projet <span className="text-terre-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputClass}
          placeholder="Décrivez la pièce, l’état actuel du sol, l’essence ou la finition qui vous plairait, vos délais…"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-lin-100 p-4">
        <input
          type="checkbox"
          checked={form.consentement_rgpd}
          onChange={(e) => update('consentement_rgpd', e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-chene-600"
        />
        <span className="text-sm leading-relaxed text-anthracite-700">
          J’accepte que les informations transmises via ce formulaire soient
          utilisées uniquement pour répondre à ma demande de devis. Elles ne sont
          ni cédées ni revendues. <span className="text-terre-500">*</span>
        </span>
      </label>

      {status === 'error' && (
        <p className="rounded-lg bg-terre-500/10 px-4 py-3 text-sm text-terre-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-full bg-chene-600 px-7 py-3.5 font-medium text-lin-50 transition-colors hover:bg-chene-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}

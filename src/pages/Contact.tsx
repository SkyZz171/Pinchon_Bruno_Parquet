import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import DevisForm from '@/components/DevisForm';
import { ENTREPRISE } from '@/data/content';

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-chene-600">Contact</p>
        <h1 className="mt-3 text-4xl text-anthracite-900 sm:text-5xl">
          Demandez votre devis
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-anthracite-700">
          Un projet de pose, un parquet à rénover ou simplement une question ?
          Décrivez votre besoin, Bruno vous répond en personne et sans engagement.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-lin-200 bg-lin-50 p-8 shadow-sm">
          <DevisForm />
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl bg-anthracite-900 p-8 text-lin-100">
            <h2 className="text-xl text-lin-50">Joindre l’atelier</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 text-chene-400" strokeWidth={1.5} />
                <div>
                  <p className="text-lin-100/60">Téléphone</p>
                  <a href={ENTREPRISE.telephoneFixeLien} className="text-lin-50 hover:text-chene-300">
                    {ENTREPRISE.telephoneFixe}
                  </a>
                  <a href={ENTREPRISE.telephoneMobileLien} className="block text-lin-50 hover:text-chene-300">
                    {ENTREPRISE.telephoneMobile}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-chene-400" strokeWidth={1.5} />
                <div>
                  <p className="text-lin-100/60">Adresse</p>
                  <p className="text-lin-50">{ENTREPRISE.adresse}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 text-chene-400" strokeWidth={1.5} />
                <div>
                  <p className="text-lin-100/60">E-mail</p>
                  <a href={ENTREPRISE.emailLien} className="text-lin-50 hover:text-chene-300">
                    {ENTREPRISE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-chene-400" strokeWidth={1.5} />
                <div>
                  <p className="text-lin-100/60">Zone d’intervention</p>
                  <p className="text-lin-50">{ENTREPRISE.zone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 text-chene-400" strokeWidth={1.5} />
                <div>
                  <p className="text-lin-100/60">Disponibilité</p>
                  <p className="text-lin-50">Du lundi au samedi, sur rendez-vous</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-lin-200 bg-lin-100 p-8">
            <h2 className="text-xl text-anthracite-900">Le bon réflexe</h2>
            <p className="mt-3 text-sm leading-relaxed text-anthracite-700">
              Pour un devis plus précis, indiquez la surface concernée, l’état
              actuel du sol et, si possible, joignez quelques photos par e-mail.
              Cela permet souvent d’avancer avant même la visite.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

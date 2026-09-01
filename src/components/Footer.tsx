import { TreePine, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter, Route } from '@/lib/router';
import { ENTREPRISE, NAV } from '@/data/content';

const LEGAL: { label: string; route: Route }[] = [
  { label: 'Mentions légales', route: 'mentions-legales' },
  { label: 'Conditions générales de vente', route: 'cgv' },
  { label: 'Politique de confidentialité', route: 'confidentialite' },
];

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-anthracite-900 text-lin-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <TreePine className="h-6 w-6 text-chene-400" strokeWidth={1.5} />
              <span className="font-serif text-xl">Pinchon Bruno</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-lin-100/70">
              Pose et rénovation de parquet. Un artisan, un interlocuteur unique,
              du premier conseil à la dernière couche de finition.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-chene-400">
              Le site
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => navigate(item.route)}
                    className="text-lin-100/75 transition-colors hover:text-lin-50"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-chene-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-lin-100/75">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-chene-400" />
                <span className="flex flex-col">
                  <a href={ENTREPRISE.telephoneFixeLien} className="hover:text-lin-50">
                    {ENTREPRISE.telephoneFixe}
                  </a>
                  <a href={ENTREPRISE.telephoneMobileLien} className="hover:text-lin-50">
                    {ENTREPRISE.telephoneMobile}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-chene-400" />
                <a href={ENTREPRISE.emailLien} className="hover:text-lin-50">
                  {ENTREPRISE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-chene-400" />
                <span>{ENTREPRISE.zone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-lin-100/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {ENTREPRISE.nom} — {ENTREPRISE.metier}.
            Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.route}>
                <button
                  onClick={() => navigate(item.route)}
                  className="transition-colors hover:text-lin-50"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

import { Check } from 'lucide-react';
import { PageBanner, SectionHeading, DevisCTA } from '@/components/ui';
import { POSE_SERVICES, REALISATIONS } from '@/data/content';

const DETAILS = [
  {
    titre: 'Parquet cloué traditionnel',
    points: [
      'Lames massives sur lambourdes ou solivage',
      'Le seul parquet qui se rénove indéfiniment',
      'Idéal en rénovation de bâti ancien',
    ],
  },
  {
    titre: 'Parquet collé',
    points: [
      'Collage plein pour une grande stabilité',
      'Compatible avec le chauffage au sol',
      'Marche silencieuse, parfait pour les lames larges',
    ],
  },
  {
    titre: 'Parquet flottant',
    points: [
      'Pose sur sous-couche isolante, sans colle ni clou',
      'Mise en œuvre rapide et propre',
      'Bon confort acoustique et thermique',
    ],
  },
];

export default function Prestations() {
  return (
    <div>
      <PageBanner
        eyebrow="Prestations"
        title="La pose du parquet, dans les règles du métier"
        intro="Trois techniques, un même niveau d’exigence. On choisit ensemble celle qui convient à votre pièce, votre support et votre budget."
        image={REALISATIONS[0].image}
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {POSE_SERVICES.map((s, i) => (
            <div
              key={s.titre}
              className="flex flex-col rounded-2xl border border-lin-200 bg-lin-50 p-8"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-chene-600">
                {s.accroche}
              </span>
              <h2 className="mt-3 text-2xl text-anthracite-900">{s.titre}</h2>
              <p className="mt-4 leading-relaxed text-anthracite-700">{s.texte}</p>
              <ul className="mt-6 space-y-3 border-t border-lin-200 pt-6">
                {DETAILS[i].points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-anthracite-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-chene-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lin-100">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="La méthode"
            title="Un accompagnement de bout en bout"
            intro="La pose n’est qu’une étape. Autour d’elle, tout un travail invisible garantit un résultat qui dure."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: '01',
                t: 'Visite et conseil',
                d: 'Mesures, état du support, choix de l’essence et de la pose selon l’usage réel de la pièce.',
              },
              {
                n: '02',
                t: 'Devis clair',
                d: 'Un chiffrage détaillé, sans surprise, avec les fournitures et la main-d’œuvre distinguées.',
              },
              {
                n: '03',
                t: 'Préparation du support',
                d: 'Contrôle de planéité, ragréage si nécessaire : rien ne se pose sur un sol mal préparé.',
              },
              {
                n: '04',
                t: 'Pose et finition',
                d: 'Calepinage, coupes ajustées, puis vitrification, huile ou cire selon votre choix.',
              },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl bg-lin-50 p-7">
                <span className="font-serif text-3xl text-chene-400">{step.n}</span>
                <h3 className="mt-3 text-lg text-anthracite-900">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-anthracite-700">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DevisCTA />
    </div>
  );
}

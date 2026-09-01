import { ArrowRight, Hammer, Layers, Wind, UserRound, Quote } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { SectionHeading, DevisCTA } from '@/components/ui';
import {
  ATOUTS,
  POSE_SERVICES,
  HERO_IMAGE,
  ATELIER_IMAGE,
} from '@/data/content';

const ATOUT_ICONS = [UserRound, Layers, Hammer, Wind];

export default function Home() {
  const { navigate } = useRouter();

  return (
    <div>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Parquet en chêne baigné de lumière naturelle"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite-900/90 via-anthracite-900/65 to-anthracite-900/25" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
          <div className="max-w-2xl fade-up">
            <p className="text-sm uppercase tracking-[0.3em] text-chene-300">
              Pose et rénovation de parquet
            </p>
            <h1 className="mt-5 text-4xl leading-tight text-lin-50 sm:text-6xl">
              Le bois posé lame après lame, par la main qui vous a conseillé.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-lin-100/85">
              Bruno Pinchon pose et rénove le parquet comme on transmet un
              savoir-faire : avec des bois choisis, des gestes précis et un seul
              interlocuteur du devis à la dernière couche.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-chene-600 px-8 py-4 font-medium text-lin-50 transition-colors hover:bg-chene-700"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('realisations')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-lin-100/40 px-8 py-4 font-medium text-lin-50 transition-colors hover:bg-lin-50/10"
              >
                Voir les réalisations
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={ATELIER_IMAGE}
              alt="Bruno Pinchon ponçant une pièce de bois dans son atelier"
              className="w-full rounded-2xl object-cover shadow-xl shadow-black/10"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-lin-50 p-6 shadow-lg sm:block">
              <p className="font-serif text-4xl text-chene-600">20 ans</p>
              <p className="text-sm text-anthracite-600">
                de bois travaillé à la main
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="L’artisan"
              title="Un métier de patience, pas de raccourcis"
            />
            <p className="mt-5 leading-relaxed text-anthracite-700">
              Un parquet bien posé ne se remarque pas : il se ressent sous le pied,
              se tait quand on marche, et vieillit sans jamais fatiguer la pièce.
              C’est ce résultat discret qui demande le plus de soin.
            </p>
            <p className="mt-4 leading-relaxed text-anthracite-700">
              Chez Pinchon Bruno, chaque chantier reste entre les mains de la même
              personne. Vous parlez à celui qui prend les mesures, sélectionne le
              bois, ajuste chaque coupe et applique la finition. Aucun relais, aucune
              approximation.
            </p>
            <button
              onClick={() => navigate('prestations')}
              className="mt-8 inline-flex items-center gap-2 font-medium text-chene-700 hover:text-chene-600"
            >
              Découvrir les prestations
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-lin-100">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Pourquoi Pinchon Bruno"
            title="Ce qui change quand un seul artisan tient le fil"
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ATOUTS.map((atout, i) => {
              const Icon = ATOUT_ICONS[i];
              return (
                <div
                  key={atout.titre}
                  className="rounded-2xl border border-lin-200 bg-lin-50 p-7 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chene-600/10">
                    <Icon className="h-6 w-6 text-chene-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl text-anthracite-900">{atout.titre}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-anthracite-700">
                    {atout.texte}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Nos savoir-faire"
          title="Trois façons de poser, une seule exigence"
          intro="Traditionnel, collé ou flottant : le choix dépend de la pièce, du support et de l’usage. On vous oriente vers la pose qui tiendra, pas vers la plus rapide."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {POSE_SERVICES.map((s) => (
            <div
              key={s.titre}
              className="group flex flex-col rounded-2xl border border-lin-200 bg-lin-50 p-8"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-chene-600">
                {s.accroche}
              </span>
              <h3 className="mt-3 text-2xl text-anthracite-900">{s.titre}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-anthracite-700">
                {s.texte}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button
            onClick={() => navigate('prestations')}
            className="inline-flex items-center gap-2 font-medium text-chene-700 hover:text-chene-600"
          >
            Toutes les prestations en détail
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="bg-anthracite-900">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Quote className="mx-auto h-10 w-10 text-chene-400" strokeWidth={1.5} />
          <p className="mt-6 font-serif text-2xl leading-relaxed text-lin-50 sm:text-3xl">
            « Bruno a repris un vieux parquet que tout le monde nous disait de
            jeter. Après ponçage, on a retrouvé un chêne magnifique. Travail
            soigné, conseils honnêtes, délais tenus. »
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-chene-300">
            Famille Léonard — maison de ville
          </p>
        </div>
      </section>

      <DevisCTA />
    </div>
  );
}

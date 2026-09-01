import { PageBanner, DevisCTA } from '@/components/ui';
import { REALISATIONS } from '@/data/content';

export default function Realisations() {
  return (
    <div>
      <PageBanner
        eyebrow="Réalisations"
        title="Des chantiers où le bois a le dernier mot"
        intro="Bâtons rompus, chevrons, lames larges ou parquets anciens remis à neuf : quelques pièces livrées, du parquet neuf à la rénovation complète."
        image={REALISATIONS[1].image}
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.map((r) => (
            <figure
              key={r.titre}
              className="group overflow-hidden rounded-2xl border border-lin-200 bg-lin-50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.image}
                  alt={`${r.titre} — ${r.lieu}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-chene-600">
                  {r.lieu}
                </p>
                <h3 className="mt-2 text-xl text-anthracite-900">{r.titre}</h3>
                <p className="mt-1 text-sm text-anthracite-700">{r.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <DevisCTA
        title="Votre pièce mérite le même soin"
        text="Chaque parquet est unique. Parlons du vôtre : essence, motif, finition et budget."
      />
    </div>
  );
}

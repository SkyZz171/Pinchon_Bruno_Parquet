import { PageBanner, SectionHeading, DevisCTA } from '@/components/ui';
import { FINITIONS, ETAPES_RENOVATION, RENOVATION_IMAGE } from '@/data/content';

export default function Renovation() {
  return (
    <div>
      <PageBanner
        eyebrow="Entretien & Rénovation"
        title="Un parquet fatigué n’est presque jamais un parquet perdu"
        intro="Sous les rayures et le gris du temps se cache souvent un bois superbe. Le ponçage le révèle, la bonne finition le protège pour des années."
        image={RENOVATION_IMAGE}
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="La rénovation, étape par étape"
          title="Redonner vie au bois sans le remplacer"
          intro="Un ponçage approfondi élimine les porosités, efface les taches et aplanit les différences de niveau. On repart d’une surface saine, prête à recevoir sa nouvelle finition."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ETAPES_RENOVATION.map((etape, i) => (
            <div key={etape.titre} className="relative">
              <span className="font-serif text-5xl text-chene-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl text-anthracite-900">{etape.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-anthracite-700">
                {etape.texte}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lin-100">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Choisir sa finition"
            title="Vitrification, huile ou cire : le bon choix selon votre pièce"
            intro="C’est la finition qui décide de l’aspect final et de l’entretien au quotidien. Voici comment les départager, simplement."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {FINITIONS.map((f) => (
              <div
                key={f.titre}
                className="flex flex-col rounded-2xl border border-lin-200 bg-lin-50 p-8"
              >
                <span className="inline-block w-fit rounded-full bg-chene-600/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-chene-700">
                  {f.pour}
                </span>
                <h3 className="mt-4 text-2xl text-anthracite-900">{f.titre}</h3>
                <p className="mt-4 leading-relaxed text-anthracite-700">{f.texte}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-chene-300/50 bg-lin-50 p-7">
            <p className="leading-relaxed text-anthracite-700">
              <span className="font-medium text-anthracite-900">En deux mots :</span>{' '}
              la vitrification pour un séjour, une cuisine ou un couloir très
              fréquentés ; l’huile pour garder le bois vivant et facile à retoucher ;
              la cire pour le charme des parquets anciens dans une chambre ou un
              bureau. En cas de doute, on en parle sur place.
            </p>
          </div>
        </div>
      </section>

      <DevisCTA
        title="Envie de savoir ce que cache votre parquet ?"
        text="Envoyez-nous quelques photos et la surface concernée. Bruno vous dit franchement s’il faut rénover ou remplacer."
      />
    </div>
  );
}

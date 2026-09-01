import { ReactNode } from 'react';
import { useRouter } from '@/lib/router';

export function PageBanner({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite-900/90 via-anthracite-900/55 to-anthracite-900/40" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32">
        <p className="text-sm uppercase tracking-[0.28em] text-chene-300">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl text-lin-50 sm:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-lin-100/85">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.28em] text-chene-600">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl text-anthracite-900 sm:text-4xl">{title}</h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-anthracite-700">{intro}</p>
      )}
    </div>
  );
}

export function DevisCTA({
  title = 'Un projet de parquet en tête ?',
  text = 'Décrivez votre pièce et vos envies. Bruno vous répond en personne et établit un devis clair, sans engagement.',
}: {
  title?: string;
  text?: string;
}) {
  const { navigate } = useRouter();
  return (
    <section className="bg-chene-700">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl text-lin-50">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-lin-100/85">{text}</p>
        </div>
        <button
          onClick={() => navigate('contact')}
          className="shrink-0 rounded-full bg-lin-50 px-8 py-4 font-medium text-anthracite-900 transition-transform hover:-translate-y-0.5 hover:bg-lin-100"
        >
          Demander un devis gratuit
        </button>
      </div>
    </section>
  );
}

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <p className="text-sm uppercase tracking-[0.28em] text-chene-600">
        Informations légales
      </p>
      <h1 className="mt-3 text-4xl text-anthracite-900">{title}</h1>
      <p className="mt-2 text-sm text-anthracite-600">Dernière mise à jour : {updated}</p>
      <div className="legal mt-10 space-y-8 text-anthracite-700">{children}</div>
    </section>
  );
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-xl text-anthracite-900">{title}</h2>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </div>
  );
}

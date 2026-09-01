import { useEffect, useState } from 'react';
import { Menu, X, TreePine } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { NAV } from '@/data/content';

export default function Header() {
  const { route, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'bg-lin-50/95 backdrop-blur border-b border-lin-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate('accueil')}
          className="flex items-center gap-2 text-left"
        >
          <TreePine
            className={`h-6 w-6 ${solid ? 'text-chene-600' : 'text-lin-50'}`}
            strokeWidth={1.5}
          />
          <span
            className={`font-serif text-xl leading-none tracking-wide ${
              solid ? 'text-anthracite-900' : 'text-lin-50'
            }`}
          >
            Pinchon Bruno
            <span
              className={`block text-[0.62rem] font-sans uppercase tracking-[0.28em] ${
                solid ? 'text-chene-600' : 'text-lin-100/80'
              }`}
            >
              Artisan parqueteur
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`text-sm transition-colors ${
                route === item.route
                  ? solid
                    ? 'text-chene-600'
                    : 'text-lin-50'
                  : solid
                  ? 'text-anthracite-600 hover:text-chene-600'
                  : 'text-lin-100/85 hover:text-lin-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            className="rounded-full bg-chene-600 px-5 py-2 text-sm font-medium text-lin-50 transition-colors hover:bg-chene-700"
          >
            Demander un devis
          </button>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? (
            <X className="h-6 w-6 text-anthracite-900" />
          ) : (
            <Menu className={`h-6 w-6 ${solid ? 'text-anthracite-900' : 'text-lin-50'}`} />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-lin-200 bg-lin-50 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`rounded-lg px-3 py-3 text-left text-base ${
                  route === item.route
                    ? 'bg-lin-100 text-chene-700'
                    : 'text-anthracite-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('contact')}
              className="mt-2 rounded-full bg-chene-600 px-5 py-3 text-center text-base font-medium text-lin-50"
            >
              Demander un devis
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

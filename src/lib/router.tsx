import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Route =
  | 'accueil'
  | 'prestations'
  | 'renovation'
  | 'realisations'
  | 'contact'
  | 'mentions-legales'
  | 'cgv'
  | 'confidentialite'
  | 'admin';

const ROUTES: Route[] = [
  'accueil',
  'prestations',
  'renovation',
  'realisations',
  'contact',
  'mentions-legales',
  'cgv',
  'confidentialite',
  'admin',
];

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  return (ROUTES.includes(raw as Route) ? raw : 'accueil') as Route;
}

type RouterValue = {
  route: Route;
  navigate: (route: Route) => void;
};

const RouterContext = createContext<RouterValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = (next: Route) => {
    window.location.hash = `/${next}`;
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter(): RouterValue {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}

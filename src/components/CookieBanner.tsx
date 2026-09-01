import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { useRouter } from '@/lib/router';

const STORAGE_KEY = 'pinchon-cookie-consent';

export default function CookieBanner() {
  const { navigate } = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: 'accepte' | 'refuse') => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-lin-200 bg-lin-50 p-5 shadow-2xl shadow-black/10 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-chene-600" strokeWidth={1.5} />
          <p className="text-sm leading-relaxed text-anthracite-700">
            Ce site utilise uniquement des cookies nécessaires à son bon
            fonctionnement. Aucun cookie publicitaire ou de suivi n’est déposé.{' '}
            <button
              onClick={() => navigate('confidentialite')}
              className="underline decoration-chene-400 underline-offset-2 hover:text-chene-700"
            >
              En savoir plus
            </button>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => decide('refuse')}
            className="rounded-full border border-anthracite-600/30 px-4 py-2 text-sm text-anthracite-700 transition-colors hover:bg-lin-100"
          >
            Refuser
          </button>
          <button
            onClick={() => decide('accepte')}
            className="rounded-full bg-chene-600 px-5 py-2 text-sm font-medium text-lin-50 transition-colors hover:bg-chene-700"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

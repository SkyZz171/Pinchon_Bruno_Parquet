import { RouterProvider, useRouter } from '@/lib/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Home from '@/pages/Home';
import Prestations from '@/pages/Prestations';
import Renovation from '@/pages/Renovation';
import Realisations from '@/pages/Realisations';
import Contact from '@/pages/Contact';
import MentionsLegales from '@/pages/MentionsLegales';
import CGV from '@/pages/CGV';
import Confidentialite from '@/pages/Confidentialite';
import Admin from '@/pages/Admin';

function CurrentPage() {
  const { route } = useRouter();
  switch (route) {
    case 'prestations':
      return <Prestations />;
    case 'renovation':
      return <Renovation />;
    case 'realisations':
      return <Realisations />;
    case 'contact':
      return <Contact />;
    case 'mentions-legales':
      return <MentionsLegales />;
    case 'cgv':
      return <CGV />;
    case 'confidentialite':
      return <Confidentialite />;
    case 'admin':
      return <Admin />;
    default:
      return <Home />;
  }
}

function App() {
  return (
    <RouterProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <CurrentPage />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </RouterProvider>
  );
}

export default App;

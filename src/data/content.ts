import { Route } from '@/lib/router';

export const ENTREPRISE = {
  nom: 'Pinchon Bruno',
  metier: 'Artisan parqueteur',
  gerant: 'Bruno Pinchon',
  telephoneFixe: '01 43 24 57 41',
  telephoneFixeLien: 'tel:+33143245741',
  telephoneMobile: '06 81 84 00 00',
  telephoneMobileLien: 'tel:+33681840000',
  email: 'bruno.pinchon847@orange.fr',
  emailLien: 'mailto:bruno.pinchon847@orange.fr',
  zone: 'Le Perreux-sur-Marne et alentours, déplacement sur chantier',
  adresse: '5 Rue Robert Diaquin, 94170 Le Perreux-sur-Marne',
  siret: '000 000 000 00000',
  formeJuridique: 'Entreprise individuelle (artisan)',
  tva: 'TVA non applicable, art. 293 B du CGI',
};

export const NAV: { label: string; route: Route }[] = [
  { label: 'Accueil', route: 'accueil' },
  { label: 'Prestations', route: 'prestations' },
  { label: 'Entretien & Rénovation', route: 'renovation' },
  { label: 'Réalisations', route: 'realisations' },
  { label: 'Contact', route: 'contact' },
];

export const POSE_SERVICES = [
  {
    titre: 'Parquet cloué traditionnel',
    accroche: 'Le geste d’origine, lame après lame.',
    texte:
      'Des lames massives fixées sur lambourdes, dans la tradition du parquet ancien. Une pose exigeante qui traverse les décennies et se rénove indéfiniment.',
  },
  {
    titre: 'Parquet collé',
    accroche: 'Stable, silencieux, compatible chauffage au sol.',
    texte:
      'Un collage plein qui supprime les bruits de marche et accompagne les planchers chauffants. Idéal pour les grandes surfaces et les lames larges.',
  },
  {
    titre: 'Parquet flottant',
    accroche: 'La solution nette, posée sans colle ni clou.',
    texte:
      'Une pose sur sous-couche isolante, rapide et propre, qui protège du bruit et du froid. Le bon compromis entre budget maîtrisé et confort au quotidien.',
  },
];

export const FINITIONS = [
  {
    titre: 'Vitrification',
    pour: 'La robustesse',
    texte:
      'Un film protecteur transparent recouvre le bois et encaisse le passage, les chaises et les enfants. Entretien simple, à l’eau, sans reprise fréquente. Le choix des pièces de vie très fréquentées.',
  },
  {
    titre: 'Huile',
    pour: 'L’aspect naturel',
    texte:
      'L’huile pénètre le bois plutôt que de le recouvrir. On garde le toucher brut, mat et chaleureux, et l’on répare une zone abîmée sans tout reponcer. À nourrir de temps en temps.',
  },
  {
    titre: 'Cire',
    pour: 'Le cachet ancien',
    texte:
      'Une finition patrimoniale, douce et satinée, qui révèle la profondeur des vieux parquets. Plus délicate à l’usage, elle se destine aux pièces où l’on recherche l’authenticité avant tout.',
  },
];

export const ETAPES_RENOVATION = [
  {
    titre: 'Diagnostic du parquet',
    texte:
      'On regarde l’essence, l’épaisseur restante, les lames à remplacer et l’état du support avant d’engager quoi que ce soit.',
  },
  {
    titre: 'Ponçage approfondi',
    texte:
      'Passages successifs jusqu’au bois sain pour effacer rayures, porosités et différences de niveau. La poussière est aspirée à la source.',
  },
  {
    titre: 'Réparations et préparation',
    texte:
      'Remplacement des lames fendues, rebouchage des interstices et dépoussiérage complet avant la finition.',
  },
  {
    titre: 'Finition au choix',
    texte:
      'Vitrification, huile ou cire selon l’usage de la pièce et l’aspect recherché, appliquée en plusieurs couches.',
  },
];

export const ATOUTS = [
  {
    titre: 'Un seul interlocuteur',
    texte:
      'Bruno Pinchon suit votre chantier du premier rendez-vous à la dernière couche. Pas d’intermédiaire, pas de sous-traitance : la personne qui conseille est celle qui pose.',
  },
  {
    titre: 'Des bois de premier choix',
    texte:
      'Essences sélectionnées pour leur grain et leur tenue. On pose ce que l’on poserait chez soi, et l’on vous explique chaque option.',
  },
  {
    titre: 'Un travail de précision',
    texte:
      'Alignements, coupes, raccords : le soin se voit dans les détails que l’on ne remarque justement pas. C’est là que se joue la durée d’un parquet.',
  },
  {
    titre: 'Une isolation naturelle',
    texte:
      'Le bois tempère la pièce et amortit les bruits de pas. Posé dans les règles, un parquet réchauffe l’ambiance autant que l’air.',
  },
];

export const REALISATIONS = [
  {
    titre: 'Chêne à bâtons rompus',
    lieu: 'Appartement haussmannien',
    detail: 'Pose collée, finition huilée mate',
    image:
      'https://images.pexels.com/photos/15066939/pexels-photo-15066939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    titre: 'Parquet chevron',
    lieu: 'Cuisine ouverte',
    detail: 'Pose collée sur chauffage au sol',
    image:
      'https://images.pexels.com/photos/7587861/pexels-photo-7587861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    titre: 'Lames larges rustiques',
    lieu: 'Séjour de campagne',
    detail: 'Parquet massif, finition cire',
    image:
      'https://images.pexels.com/photos/6364752/pexels-photo-6364752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    titre: 'Rénovation par ponçage',
    lieu: 'Maison de ville',
    detail: 'Ponçage complet et vitrification',
    image:
      'https://images.pexels.com/photos/9819644/pexels-photo-9819644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    titre: 'Chevron clair contemporain',
    lieu: 'Chambre parentale',
    detail: 'Pose collée, finition vitrifiée mate',
    image:
      'https://images.pexels.com/photos/7587872/pexels-photo-7587872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    titre: 'Salon lumineux',
    lieu: 'Rénovation d’un plancher ancien',
    detail: 'Reprise des lames et huile naturelle',
    image:
      'https://images.pexels.com/photos/4409365/pexels-photo-4409365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const HERO_IMAGE =
  'https://images.pexels.com/photos/9819644/pexels-photo-9819644.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600';

export const ATELIER_IMAGE =
  'https://images.pexels.com/photos/5466228/pexels-photo-5466228.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

export const RENOVATION_IMAGE =
  'https://images.pexels.com/photos/5710896/pexels-photo-5710896.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

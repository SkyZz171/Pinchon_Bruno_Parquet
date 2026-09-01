/*
# Création de la table des demandes de devis

1. Nouvelles tables
   - `demandes_devis`
     - `id` (uuid, clé primaire) : identifiant unique de la demande
     - `nom` (text, obligatoire) : nom et prénom du client
     - `email` (text, obligatoire) : adresse e-mail de contact
     - `telephone` (text) : numéro de téléphone facultatif
     - `ville` (text) : ville / code postal du chantier
     - `type_projet` (text, obligatoire) : type de prestation souhaitée (pose, rénovation, entretien, autre)
     - `surface` (text) : surface approximative en m²
     - `message` (text, obligatoire) : description du projet
     - `consentement_rgpd` (boolean, obligatoire) : accord explicite pour le traitement des données
     - `created_at` (timestamptz) : date de réception de la demande

2. Sécurité
   - Activation de la sécurité au niveau des lignes (RLS) sur `demandes_devis`.
   - Le site n'a pas de connexion utilisateur : le formulaire public peut UNIQUEMENT créer une demande (INSERT).
   - Aucune politique de lecture/modification/suppression publique : les demandes ne sont jamais exposées côté visiteur.

3. Notes importantes
   1. Le consentement RGPD est stocké pour chaque demande à des fins de preuve.
   2. La lecture des demandes se fait exclusivement via le tableau de bord Supabase (rôle privilégié), jamais depuis le site public.
*/

CREATE TABLE IF NOT EXISTS demandes_devis (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  email text NOT NULL,
  telephone text DEFAULT '',
  ville text DEFAULT '',
  type_projet text NOT NULL,
  surface text DEFAULT '',
  message text NOT NULL,
  consentement_rgpd boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demandes_devis ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_demandes_devis" ON demandes_devis;
CREATE POLICY "public_insert_demandes_devis" ON demandes_devis FOR INSERT
  TO anon, authenticated WITH CHECK (true);

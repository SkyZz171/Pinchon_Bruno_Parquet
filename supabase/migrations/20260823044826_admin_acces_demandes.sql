/*
# Espace administrateur — accès aux demandes de devis

1. Nouvelles tables
   - `admin_settings`
     - `id` (int, clé primaire, fixé à 1) : ligne unique de configuration
     - `mot_de_passe_hash` (text, obligatoire) : empreinte bcrypt du mot de passe admin
     - `created_at` (timestamptz)

2. Sécurité
   - Activation de RLS sur `admin_settings` : AUCUNE politique n'est créée.
     La table n'est donc ni lisible ni modifiable depuis le client (clé anon).
   - Le mot de passe n'est jamais stocké en clair : seul son empreinte bcrypt est conservée.
   - Une fonction `admin_lister_demandes` SECURITY DEFINER vérifie le mot de passe
     fourni contre l'empreinte, puis renvoie les demandes. Elle s'exécute avec les
     privilèges du propriétaire (qui contourne RLS) uniquement après vérification.
   - Une fonction `admin_verifier` permet de valider le mot de passe sans renvoyer de données.

3. Notes importantes
   1. Mot de passe par défaut : « pinchon-admin ». À changer dès la première connexion
      via la fonction admin_changer_mot_de_passe.
   2. L'extension pgcrypto est requise pour crypt() / gen_salt().
   3. La fonction utilise un search_path fixé à public pour éviter toute injection.
*/

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS admin_settings (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  mot_de_passe_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

INSERT INTO admin_settings (id, mot_de_passe_hash)
VALUES (1, crypt('pinchon-admin', gen_salt('bf')))
ON CONFLICT (id) DO NOTHING;

-- Lecture des demandes : protégée par mot de passe
CREATE OR REPLACE FUNCTION admin_lister_demandes(mot_de_passe text)
RETURNS SETOF demandes_devis
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM admin_settings
    WHERE crypt(mot_de_passe, mot_de_passe_hash) = mot_de_passe_hash
  ) THEN
    RETURN QUERY
    SELECT * FROM demandes_devis
    ORDER BY created_at DESC;
  ELSE
    RAISE EXCEPTION 'Accès refusé';
  END IF;
END;
$$;

-- Vérification simple du mot de passe (pour l'écran de connexion)
CREATE OR REPLACE FUNCTION admin_verifier(mot_de_passe text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_settings
    WHERE crypt(mot_de_passe, mot_de_passe_hash) = mot_de_passe_hash
  );
END;
$$;

-- Changement du mot de passe (ancien + nouveau requis)
CREATE OR REPLACE FUNCTION admin_changer_mot_de_passe(ancien text, nouveau text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM admin_settings
    WHERE crypt(ancien, mot_de_passe_hash) = mot_de_passe_hash
  ) THEN
    RAISE EXCEPTION 'Ancien mot de passe incorrect';
  END IF;

  IF length(nouveau) < 6 THEN
    RAISE EXCEPTION 'Le nouveau mot de passe doit faire au moins 6 caractères';
  END IF;

  UPDATE admin_settings
  SET mot_de_passe_hash = crypt(nouveau, gen_salt('bf'))
  WHERE id = 1;

  RETURN true;
END;
$$;

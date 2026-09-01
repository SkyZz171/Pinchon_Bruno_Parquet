/*
# Correction des fonctions admin pour utiliser pgcrypto dans le schéma extensions

pgcrypto est installée dans le schéma `extensions`, pas `public`. Les fonctions
admin_verifier, admin_lister_demandes et admin_changer_mot_de_passe utilisaient
crypt() et gen_salt() sans qualifier le schéma, ce qui échouait avec search_path=public.

On recrée ces fonctions en appelant extensions.crypt() et extensions.gen_salt()
explicitement, et on régénère le hash du mot de passe par défaut.
*/

-- Régénération du hash avec le schéma qualifié
UPDATE admin_settings
SET mot_de_passe_hash = extensions.crypt('pinchon-admin', extensions.gen_salt('bf'))
WHERE id = 1;

CREATE OR REPLACE FUNCTION admin_verifier(mot_de_passe text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_settings
    WHERE extensions.crypt(mot_de_passe, mot_de_passe_hash) = mot_de_passe_hash
  );
END;
$$;

CREATE OR REPLACE FUNCTION admin_lister_demandes(mot_de_passe text)
RETURNS SETOF demandes_devis
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM admin_settings
    WHERE extensions.crypt(mot_de_passe, mot_de_passe_hash) = mot_de_passe_hash
  ) THEN
    RETURN QUERY
    SELECT * FROM demandes_devis
    ORDER BY created_at DESC;
  ELSE
    RAISE EXCEPTION 'Accès refusé';
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION admin_changer_mot_de_passe(ancien text, nouveau text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM admin_settings
    WHERE extensions.crypt(ancien, mot_de_passe_hash) = mot_de_passe_hash
  ) THEN
    RAISE EXCEPTION 'Ancien mot de passe incorrect';
  END IF;

  IF length(nouveau) < 6 THEN
    RAISE EXCEPTION 'Le nouveau mot de passe doit faire au moins 6 caractères';
  END IF;

  UPDATE admin_settings
  SET mot_de_passe_hash = extensions.crypt(nouveau, extensions.gen_salt('bf'))
  WHERE id = 1;

  RETURN true;
END;
$$;

/*
# Activation de pgcrypto pour les fonctions admin

L'extension pgcrypto fournit crypt() et gen_salt(), utilisées par les fonctions
admin_verifier, admin_lister_demandes et admin_changer_mot_de_passe.
La migration précédente tentait de l'activer mais elle n'était pas disponible
au moment de l'exécution. On l'active ici explicitement.
*/

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- On régénère le hash du mot de passe par défaut pour être sûr qu'il soit
-- compatible avec l'extension désormais active.
UPDATE admin_settings
SET mot_de_passe_hash = crypt('pinchon-admin', gen_salt('bf'))
WHERE id = 1;

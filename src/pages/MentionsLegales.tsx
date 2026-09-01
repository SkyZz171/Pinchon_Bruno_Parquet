import { LegalLayout, LegalBlock } from '@/components/ui';
import { useRouter } from '@/lib/router';
import { ENTREPRISE } from '@/data/content';

export default function MentionsLegales() {
  const { navigate } = useRouter();
  return (
    <LegalLayout title="Mentions légales" updated="août 2026">
      <LegalBlock title="Éditeur du site">
        <p>
          Le présent site est édité par <strong>{ENTREPRISE.nom}</strong>,{' '}
          {ENTREPRISE.metier}.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Forme juridique : {ENTREPRISE.formeJuridique}</li>
          <li>Responsable de la publication : {ENTREPRISE.gerant}</li>
          <li>Adresse : {ENTREPRISE.adresse}</li>
          <li>Téléphone : {ENTREPRISE.telephoneFixe} / {ENTREPRISE.telephoneMobile}</li>
          <li>E-mail : {ENTREPRISE.email}</li>
          <li>Adresse : {ENTREPRISE.adresse}</li>
          <li>SIRET : {ENTREPRISE.siret}</li>
          <li>{ENTREPRISE.tva}</li>
        </ul>
        <p className="text-sm text-anthracite-600">
          Les mentions ci-dessus sont fournies à titre indicatif et doivent être
          complétées avec les informations officielles de l’entreprise avant mise
          en ligne définitive.
        </p>
      </LegalBlock>

      <LegalBlock title="Hébergement">
        <p>
          Le site est hébergé par un prestataire d’hébergement web professionnel.
          Les coordonnées complètes de l’hébergeur sont disponibles sur simple
          demande auprès de l’éditeur.
        </p>
      </LegalBlock>

      <LegalBlock title="Propriété intellectuelle">
        <p>
          L’ensemble des contenus présents sur ce site (textes, photographies,
          logo, mise en page) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction ou représentation, totale ou
          partielle, sans autorisation écrite préalable de l’éditeur est interdite.
        </p>
        <p>
          Les photographies d’ambiance présentées à titre d’illustration
          proviennent de banques d’images libres de droits.
        </p>
      </LegalBlock>

      <LegalBlock title="Responsabilité">
        <p>
          L’éditeur s’efforce d’assurer l’exactitude des informations diffusées sur
          ce site. Les descriptions de prestations sont fournies à titre indicatif
          et ne constituent pas un engagement contractuel : seul le devis signé
          fait foi.
        </p>
      </LegalBlock>

      <LegalBlock title="Données personnelles et cookies">
        <p>
          Le traitement des données transmises via le formulaire de devis et
          l’usage des cookies sont détaillés dans notre{' '}
          <button
            onClick={() => navigate('confidentialite')}
            className="underline decoration-chene-400 underline-offset-2 hover:text-chene-700"
          >
            politique de confidentialité
          </button>
          .
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}

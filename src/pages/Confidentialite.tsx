import { LegalLayout, LegalBlock } from '@/components/ui';
import { ENTREPRISE } from '@/data/content';

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="août 2026">
      <p>
        {ENTREPRISE.nom} accorde une grande importance à la protection de vos
        données personnelles. Cette politique explique quelles informations sont
        collectées, pourquoi, combien de temps elles sont conservées et quels sont
        vos droits, conformément au Règlement général sur la protection des données
        (RGPD) et à la loi Informatique et Libertés.
      </p>

      <LegalBlock title="Responsable du traitement">
        <p>
          Le responsable du traitement des données est {ENTREPRISE.gerant}, pour
          l’entreprise {ENTREPRISE.nom}. Pour toute question, vous pouvez écrire à{' '}
          <a
            href={ENTREPRISE.emailLien}
            className="underline decoration-chene-400 underline-offset-2 hover:text-chene-700"
          >
            {ENTREPRISE.email}
          </a>
          .
        </p>
      </LegalBlock>

      <LegalBlock title="Données collectées">
        <p>
          Via le formulaire de demande de devis, nous collectons uniquement les
          informations que vous nous transmettez volontairement :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>votre nom et prénom ;</li>
          <li>votre adresse e-mail ;</li>
          <li>votre numéro de téléphone (facultatif) ;</li>
          <li>votre ville ou code postal (facultatif) ;</li>
          <li>les informations relatives à votre projet (type, surface, description).</li>
        </ul>
      </LegalBlock>

      <LegalBlock title="Finalité et base légale">
        <p>
          Ces données sont utilisées dans un seul but : répondre à votre demande,
          établir un devis et assurer le suivi de notre échange. Le traitement
          repose sur votre consentement, recueilli via la case à cocher du
          formulaire, ainsi que sur l’exécution de mesures précontractuelles prises
          à votre demande.
        </p>
      </LegalBlock>

      <LegalBlock title="Destinataires">
        <p>
          Vos données sont exclusivement destinées à {ENTREPRISE.nom}. Elles ne sont
          jamais cédées, louées ni revendues à des tiers à des fins commerciales.
          Elles sont hébergées de manière sécurisée chez notre prestataire
          technique, au sein de l’Union européenne.
        </p>
      </LegalBlock>

      <LegalBlock title="Durée de conservation">
        <p>
          Les demandes sans suite sont conservées au maximum trois (3) ans à compter
          du dernier contact. Les données liées à une prestation réalisée sont
          conservées le temps nécessaire au respect de nos obligations légales et
          comptables.
        </p>
      </LegalBlock>

      <LegalBlock title="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification,
          d’effacement, de limitation et d’opposition au traitement de vos données,
          ainsi que d’un droit à la portabilité. Vous pouvez également retirer votre
          consentement à tout moment.
        </p>
        <p>
          Pour exercer ces droits, écrivez-nous à{' '}
          <a
            href={ENTREPRISE.emailLien}
            className="underline decoration-chene-400 underline-offset-2 hover:text-chene-700"
          >
            {ENTREPRISE.email}
          </a>
          . Vous disposez enfin du droit d’introduire une réclamation auprès de la
          CNIL (www.cnil.fr).
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies">
        <p>
          Ce site n’utilise que les cookies strictement nécessaires à son
          fonctionnement. Aucun cookie publicitaire, de mesure d’audience ou de
          suivi tiers n’est déposé sans votre accord. Votre choix concernant les
          cookies est conservé localement dans votre navigateur et peut être
          réinitialisé en vidant les données du site.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}

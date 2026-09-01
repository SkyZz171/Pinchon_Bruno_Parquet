import { LegalLayout, LegalBlock } from '@/components/ui';
import { ENTREPRISE } from '@/data/content';

export default function CGV() {
  return (
    <LegalLayout title="Conditions générales de vente" updated="août 2026">
      <p className="text-sm text-anthracite-600">
        Les présentes conditions encadrent les prestations de pose, de rénovation
        et d’entretien de parquet réalisées par {ENTREPRISE.nom}. Elles constituent
        un modèle à faire valider par un professionnel du droit avant toute mise en
        application.
      </p>

      <LegalBlock title="1. Objet et champ d’application">
        <p>
          Les présentes conditions générales de vente s’appliquent à l’ensemble des
          prestations de fourniture et de pose de parquet, de ponçage, de
          rénovation et de finition proposées par l’artisan. Toute commande
          implique l’adhésion sans réserve du client aux présentes conditions.
        </p>
      </LegalBlock>

      <LegalBlock title="2. Devis et commande">
        <p>
          Chaque prestation fait l’objet d’un devis gratuit et détaillé, précisant
          la nature des travaux, les matériaux, les surfaces et le prix. Le devis
          est valable trente (30) jours. La commande est ferme dès la signature du
          devis par le client, accompagnée le cas échéant du versement de l’acompte
          convenu.
        </p>
      </LegalBlock>

      <LegalBlock title="3. Prix et modalités de paiement">
        <p>
          Les prix sont indiqués en euros. En tant qu’entreprise relevant de la
          franchise en base de TVA, les prestations sont facturées nettes de taxe
          ({ENTREPRISE.tva}). Sauf mention contraire, un acompte peut être demandé à
          la commande, le solde étant réglé à la réception des travaux.
        </p>
        <p>
          Tout retard de paiement peut entraîner l’application de pénalités au taux
          légal en vigueur, ainsi qu’une indemnité forfaitaire pour frais de
          recouvrement conformément à la réglementation.
        </p>
      </LegalBlock>

      <LegalBlock title="4. Délais d’exécution">
        <p>
          Les délais sont communiqués à titre indicatif et tiennent compte de la
          disponibilité des matériaux et de l’état du support. L’artisan informe le
          client de tout aléa susceptible de modifier le calendrier prévu.
        </p>
      </LegalBlock>

      <LegalBlock title="5. Obligations du client">
        <p>
          Le client s’engage à rendre les lieux accessibles, dégagés et hors d’eau,
          à assurer l’alimentation en électricité nécessaire aux travaux et à
          signaler toute particularité du support (chauffage au sol, humidité,
          canalisations encastrées).
        </p>
      </LegalBlock>

      <LegalBlock title="6. Réception des travaux">
        <p>
          La réception est constatée à l’achèvement des travaux, en présence du
          client. Les éventuelles réserves sont consignées par écrit. À défaut de
          réserve, les travaux sont réputés conformes.
        </p>
      </LegalBlock>

      <LegalBlock title="7. Garanties">
        <p>
          Les prestations bénéficient des garanties légales applicables aux travaux
          du bâtiment. Le bois étant un matériau vivant, de légères variations de
          teinte ou de dimension liées à l’hygrométrie ne peuvent être considérées
          comme des défauts.
        </p>
      </LegalBlock>

      <LegalBlock title="8. Droit de rétractation">
        <p>
          Pour les contrats conclus hors établissement avec un consommateur, un
          délai de rétractation de quatorze (14) jours s’applique, sauf demande
          expresse d’exécution anticipée des travaux formulée par le client.
        </p>
      </LegalBlock>

      <LegalBlock title="9. Litiges et médiation">
        <p>
          En cas de différend, les parties recherchent une solution amiable. À
          défaut, le consommateur peut recourir gratuitement à un médiateur de la
          consommation. Les présentes conditions sont soumises au droit français.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}

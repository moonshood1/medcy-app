import { motion } from "framer-motion";

export function Info() {
  return (
    <>
      <section className="grid grid-cols-1 place-items-center mb-10">
        <h1 className="text-2xl lg:text-4xl text-black font-bold text-center lg:text-start">
          L’ordonnance en ligne valable en pharmacie
        </h1>
        <article className="px-3 lg:px-36 text-start">
          <p className="text-gray-400 text-xl pt-10 space-x-1">
            En téléconsultation, les médecins peuvent prescrire une ordonnance
            en ligne pour des médicaments, des examens médicaux ou des séances
            chez certains praticiens. Les ordonnances de médicaments, obtenues
            en ligne ou en cabinet,sont valables en pharmacie en France. Les
            patients peuvent la télécharger et l’imprimer, ou l’envoyer
            directement à leur pharmacie en et aller récupérer leurs médicaments
            par la suite. Le renouvellement d’ordonnance médicale est également
            possible via la téléconsultation.Le patient peut consulter le
            médecin qui a fait la prescription initiale ou demander le
            renouvellement auprès d’un autre médecin. Le délai de validité d’une
            ordonnance en ligne est similaire à celui d’une ordonnance
            classique, soit trois mois en général.
          </p>
        </article>
      </section>
      <section className="grid grid-cols-1 mt-20 py-5 place-items-center">
        <article className="px-0 lg:px-40">
          <img
            alt=""
            className="w-full lg:max-w-4xl lg:rounded-2xl"
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1660729348/medcy/team-of-two-smiling-apothecaries-in-pharmacy-stand-2022-01-28-05-33-18-utc_owhxlc.jpg"
          />
        </article>
        <article className="h-56 w-full bg-medViolet lg:-mt-32 grid place-items-center text-center lg:px-44">
          <p className="text-2xl lg:text-4xl text-center text-white">
            {" "}
            Téléconsultation en ligne et pharmacie : <br /> L’ordonnance en
            ligne se démocratise
          </p>
        </article>
      </section>
      <section className="md:px-20 lg:px-36 xl:px-60 mb-20">
        <article className="grid grid-cols-1 h-auto w-full bg-gray-100 px-4 pl-8 pt-8 pb-10 border-l-8 border-medPink">
          <h1 className="text-2xl lg:text-3xl text-black font-bold">
            Les avantages de la prescription en ligne
          </h1>
          <p className="mt-8 text-xl">
            L’avantage principal de l’ordonnance en ligne est la commodité. En
            effet, l’ordonnance numérique peut directement être envoyée au
            pharmacien et le patient peut rapidement récupérer ses médicaments .
            L’e-prescription permet de réduire l’utilisation du papier. <br />
            Étant donné qu’elles sont stockées en ligne , les praticiens et les
            patients peuvent y avoir à accès 24/7 . Cette accessibilité permet
            une bonne gestion des substances en remarquant plus facilement les
            schémas de toxicomanie . L’ordonnance en ligne favorise également
            l’identification des erreurs , les prescriptions manuscrites pouvant
            être dures à lire.
          </p>

          <h1 className="text-2xl lg:text-3xl text-black font-bold mt-6">
            Les avantages de la prescription en ligne
          </h1>
          <p className="mt-8 text-xl">
            En tant que pharmacien , vous pouvez refuser la prise en charge
            d’une prescription délivrée en ligne pour certaines raisons :
            <ul>
              <li>La non indication des mentions légales sur le document.</li>
              <li>L’absence de la signature du médecin.</li>
              <li>Le dépassement de la durée de validité de l’ordonnance.</li>
              <li>
                Le non-respect des obligations réglementaires liées aux produits
                prescrits.
              </li>
            </ul>
            Autrement, les pharmaciens ne peuvent pas refuser une ordonnance en
            ligne et se doivent de la prendre en charge de la même manière
            qu’une prescription délivrée en cabinet.
          </p>

          <h1 className="text-2xl lg:text-3xl text-black font-bold mt-6">
            La téléconsultation en pharmacie
          </h1>
          <p className="mt-8 text-xl">
            Plus simple encore, vous poouvez choisir , en tant que pharmacien ,
            de proposer la téléconsultation à vos clients. En effet , vous
            pouvez leur proposer une consultation en ligne directement en
            pharmacie pour un diagnostic ou un renouvellement d'ordonnancepar
            exemple. Ainsi , ils obtiennent un avis médical rapide et une
            ordonnance numérique qu'ils pourront utiliser immédiatement
            <br />
            En intégrant la téléconsultation aux services de votre pharmacie ,
            vous répondrez à 100 % des besoins des patients, et les ordonnances
            sont immédiatement remises. Le patient n'a pas besoin de faire de
            déplacements supplémentaires étant donné que le parcours de soin est
            centralisé. Le processus , securisé et raoide , améliore la
            satisfaction et la fidélisation de votre clientèle. En outre , vous
            recevrez une indemnisation forfaitaire du temps passé
          </p>
        </article>
        <div className="grid grid-cols-1 place-items-center mt-10 lg:place-items-start">
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            href="/#"
            className="btn bg-medRed text-white"
          >
            Inscrivez vous maintenant
          </motion.a>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

export function Advice() {
  return (
    <>
      <section className="grid lg:grid-cols-2 lg:px-40 gap-10  mt-10 lg:mt-28 pb-10">
        <article className="px-3 lg:px-0">
          <h1 className="text-center lg:text-start text-black text-2xl lg:text-4xl font-bold">
            Médecins , proposez la téléconsultation
          </h1>
          <p className="pt-4 text-xl">
            Vous êtes médecin ou professionnel de la santé à la recherche d'une
            solution de téléconsultation, qui vous permettrait d'optimiser votre
            organisation, vos revenus et d'assurer le suivi de vos patients à
            distance ?
          </p>
          <div className="mt-10 grid grid-cols-1 place-items-center lg:place-items-start">
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="btn bg-medRed text-white"
            >
              Inscrivez vous
            </motion.a>
          </div>
        </article>

        <article className="md:grid md:grid-cols-1 md:place-items-center">
          <img
            alt=""
            className="max-h-80 xl:max-h-96 lg:rounded-xl"
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1660729348/medcy/attractive-positive-smiling-successful-young-black-2021-09-10-02-22-43-utc_x5rxgm.jpg"
          />
        </article>
      </section>
      <section className="border-gray-100 border-t-2 grid grid-cols-1 my-5 py-5">
        <h1 className="text-black text-2xl lg:text-4xl font-bold text-center">
          Optez pour la solution de téléconsultation Medcy
        </h1>
        <div className="lg:px-40 my-16 text-center">
          <OwlCarousel
            className="owl-theme"
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 2,
              },
            }}
            autoplay
            autoplayTimeout={3000}
            // navSpeed={2000}
            loop
            autoplaySpeed={2000}
          >
            <div>
              <p className="text-xl">
                Données 100% sécurisée et stockées sur un hébergeur de données
                de santé agréé.
              </p>
            </div>
            <div>
              <p className="text-xl">
                Application 100% ivoirien , pour plus de santé à coeur et au
                coeur de l'humain
              </p>
            </div>
            <div>
              <p className="text-xl">Un service client rapide et courtois</p>
            </div>
            <div>
              <p className="text-xl">
                Accessible sur mobile, tablete et ordinateur
              </p>
            </div>
            <div>
              {" "}
              <p className="text-xl">
                Apporte une visibilité supplémentaire auprès de nouveaux
                patients dans toute la Cote d’ivoire
              </p>
            </div>
            <div>
              {" "}
              <p className="text-xl">
                La possibilité d’intégrer le suivi à distance de vos patients.
              </p>
            </div>
            <div>
              <p className="text-xl">
                Solution SAAS facile d'accès et sans logiciel à installer
              </p>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="border-gray-100 border-t-2 grid grid-cols-1 my-5 py-5 place-items-center">
        <article className="lg:px-40">
          <img
            alt=""
            className="w-full lg:max-w-4xl lg:rounded-2xl"
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1660729347/medcy/african-pregnant-woman-smiling-on-camera-while-tou-2021-09-04-12-41-25-utc_baauma.jpg"
          />
        </article>
        <article className="h-auto pb-10 lg:h-72 w-full bg-medPink lg:-mt-32 flex flex-col pt-5 text-white ">
          <h1 className=" uppercase text-2xl lg:text-4xl font-bold text-center">
            {" "}
            VOUS ÊTES SAGE FEMME ?{" "}
          </h1>
          <div className="px-2 lg:px-40 mt-3">
            <p className="text-xl lg:text-xl">
              {" "}
              Saviez-vous que vous avez tout à fait le droit de pratiquer la
              téléconsultation en tant que sage-femme ? Cette solution s’avère
              d’ailleurs souvent très intéressante car les avantages de la
              téléconsultation sont nombreux dans cette profession . Sans parler
              des avantages que cela représente aussi pour vos patientes ! En
              particulier celles qui ont des difficultés pour se déplacer comme
              l'absence de véhicule par exemple ou qui souhaitent simplement
              vous consulter en « toute discrétion »
            </p>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center mt-10"
            >
              <a href="#" className="btn border-4 border-white text-white">
                Commencer maintenant
              </a>
            </motion.div>
          </div>
        </article>
      </section>
    </>
  );
}

import { motion } from "framer-motion";

const UserComment = ({ clientImage, comment, name, title }) => {
  return (
    <div className="flex flex-col items-center text-center my-5 px-5 lg:px-0">
      <motion.img
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="rounded-full h-44 w-44 lg:h-56 lg:w-56 shadow-xl"
        alt="pic_1"
        src={clientImage}
      />
      <p className="pt-2 text-gray-400 text-md lg:text-xl italic">{`"${comment}"`}</p>
      <p className="pt-4 text-black text-md lg:text-xl">{name}</p>
      <p className="pt-2 text-medViolet text-sm lg:text-lg">{title}</p>
    </div>
  );
};

export function Testimony() {
  return (
    <section className="mb-10">
      <h1 className="text-black text-2xl lg:text-4xl text-center font-bold">
        Nos clients parlent de nous
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-28 place-items-center lg:px-40">
        <UserComment
          clientImage={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1661164565/medcy/smiling-afro-muslim-female-doctor-with-clipboard-p-2021-08-30-02-25-18-utc_ntqj4i_idmiqh.jpg"
          }
          comment={
            "Interface facile d’utilisation, fonctionnalités complètes pour mon utilisation, bonne réactivité de l’équipe et surtout très sympathique"
          }
          name={"Dr Nahomi Oka"}
          title={"Médecin Généraliste"}
        />
        <UserComment
          clientImage={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1661164566/medcy/african-american-doctor-2022-05-06-02-23-40-utc_ae5eut_o1efxz.jpg"
          }
          comment={
            "10/10 pour la qualité de votre plateforme et la facilité de prise en main."
          }
          name={"Steve Van"}
          title={"Gynécologue"}
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3   mt-2 lg:mt-24 place-items-center lg:px-10">
        <UserComment
          clientImage={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1661164936/medcy/confident-handsome-african-american-businessman-us-2021-12-14-19-46-59-utc_zyr0qq.jpg"
          }
          comment={"Intuitif, efficace, assistance réactive"}
          name={"Kone Patrice"}
          title={"Entrepreneur"}
        />
        <UserComment
          clientImage={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1661164566/medcy/happy-african-american-woman-with-smartphone-at-ai-2022-06-13-16-44-13-utc_fqt537_kupzl4.jpg"
          }
          comment={
            "Maecenas faucibus molis interdum. Morbi leo risus, consectetur vestibulum. Aenean eu venenatis."
          }
          name={"Sara Koffi"}
          title={"Sportive professionelle"}
        />
        <UserComment
          clientImage={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1661164566/medcy/happy-african-american-lady-watching-movie-on-lapt-2021-12-09-09-43-29-utc_ijh71l_vggcrj.jpg"
          }
          comment={
            "Bon fonctionnement avec de l’aide si besoin. En plus de cela,une bonne écoute de l’utilisateur."
          }
          name={"Mongouha Carine"}
          title={"Commerçante"}
        />
      </section>
      <section className="h-60 w-full bg-medViolet grid place-items-center text-center mt-10 lg:px-44">
        <p className="text-2xl lg:text-3xl text-white">
          {" "}
          la téléconsultation permet un gain de temps considérable et un accès
          plus pratique aux soins.
        </p>
      </section>
    </section>
  );
}

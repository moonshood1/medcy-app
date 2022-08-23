import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

export function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const sendUserDataToBackend = () => {
    if (userData.name === "" || userData.email === "") {
      return toast.error("Verifiez les données à envoyer ");
    }
    setTimeout(() => {
      console.log(userData);
      toast.success("Données envoyées avec succès");
    }, 2000);
  };

  return (
    <section className="border-t-2 border-gray-200 py-10 lg:px-80 mt-24">
      <article className="grid grid-cols-1 xl:grid-cols-2 gap-0 pb-10">
        <div>
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1660729347/medcy/african-american-student-chatting-with-remote-frie-2021-09-04-07-39-42-utc_sjkdh8.jpg"
            alt="pic_5"
          />
        </div>
        <div className="bg-gray-100 py-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-black uppercase text-center">
            Inscrivez vous{" "}
          </h1>
          <h1 className="text-2xl lg:text-3xl font-bold text-red-500 uppercase text-center">
            Maintenant{" "}
          </h1>
          <div className="px-10">
            <div className="my-5">
              <input
                type="text"
                id="first_name"
                className="bg-gray-100 border-b-2 border-gray-300 text-gray-900 text-md  block w-full p-2.5 outline-none"
                placeholder="Quel est votre nom ?"
                value={userData.name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <input
                type="text"
                id="first_name"
                className="bg-gray-100 border-b-2 border-gray-300 text-gray-900 text-md  block w-full p-2.5 outline-none"
                placeholder="Quelle est votre adresse email ?"
                value={userData.email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-10 grid grid-cols-1 place-items-center">
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="btn bg-medRed text-white"
                onClick={sendUserDataToBackend}
              >
                S'inscrire
              </motion.a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

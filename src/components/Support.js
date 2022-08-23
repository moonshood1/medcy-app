import { motion } from "framer-motion";

const Data = ({ icon, number, name }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="border-4 border-white rounded-full p-1 lg:p-2">
        {icon}
      </div>
      <div className="mt-1 lg:mt-4">
        <p className="text-md lg:text-4xl font-bold">{number}</p>
      </div>
      <div className="mt-2 mb-3 lg:mt-6">
        <p className="text-md lg:text-xl uppercase">{name}</p>
      </div>
    </div>
  );
};
export function Support() {
  return (
    <>
      <section className="border-t-2 grid lg:grid-cols-2 pt-5 place-items-center">
        <div>
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
              transition: { duration: 4, type: "spring" },
            }}
            alt=""
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1660737191/medcy/phone_med_p5sgr7.png"
          />
        </div>
        <div>
          <div className="my-4 lg:my-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
              className="text-2xl text-center lg:text-4xl lg:text-start"
            >
              Une application adaptée aux différents supports tels que IOS,
              Android et PC
            </motion.p>{" "}
          </div>
          <div className="grid grid-cols-1 place-items-center lg:grid lg:place-items-start mb-4">
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              href="/#"
              className="btn bg-medRed text-white"
            >
              Commencer maintenant
            </motion.a>
          </div>
        </div>
      </section>
      <section className="p-4 lg:p-0 lg:h-60 w-full bg-medViolet grid grid-cols-2 lg:grid-cols-4 place-items-center">
        <Data
          number={200}
          name={"Généralistes"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 lg:h-14 lg:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          }
        />
        <Data
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 lg:h-14 lg:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          }
          number={150}
          name={"Spécialistes"}
        />
        <Data
          number={12}
          name={"Ambulances"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 lg:h-14 lg:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        />
        <Data
          number={300}
          name={"Cliniques"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 lg:h-14 lg:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          }
        />
      </section>
    </>
  );
}

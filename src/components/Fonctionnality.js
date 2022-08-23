import { motion } from "framer-motion";

const Indication = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center max-w-md mb-5 lg:mb-0">
      {icon ? (
        icon
      ) : (
        <div className="rounded-full bg-gray-200 h-12 w-12"> </div>
      )}

      <div>{text}</div>
    </div>
  );
};

export function Fonctionnality() {
  return (
    <div className="my-6">
      <h1 className="text-medBlue text-3xl lg:text-5xl font-bold text-center">
        Comment ça marche ?{" "}
      </h1>
      <div className="grid lg:grid-cols-2 gap-10 place-items-center">
        <div className="mt-3 lg:mt-5">
          <Indication
            text={
              <motion.p
                initial={{ x: "-3000px" }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 1,
                    type: "spring",
                  },
                }}
                className="text-xl text-center lg:text-start"
              >
                Medcy enregistre un large réseau de professionnels sanitaires
                répartis à travers tout le pays
              </motion.p>
            }
            icon={
              <motion.svg
                className="text-gray-300 h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.2, delay: 1 },
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </motion.svg>
            }
          />

          <Indication
            text={
              <motion.p
                initial={{ x: "-3000px" }}
                animate={{
                  x: 0,
                  transition: { duration: 1, delay: 1, type: "spring" },
                }}
                className="text-xl text-center lg:text-start"
              >
                {" "}
                Un patient effectue une demande de soins en urgence et a la
                possibilié de demander une ambulance
              </motion.p>
            }
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300  h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.2, delay: 2 } }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </motion.svg>
            }
          />
        </div>

        <div
        // className="lg:mt-5"
        >
          <Indication
            text={
              <motion.p
                initial={{ x: "3000px" }}
                animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
                className="text-xl text-center lg:text-start"
              >
                Medcy met en relation le professionnel dela santé avec le
                patient.
              </motion.p>
            }
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300  h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.2, delay: 1 } }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </motion.svg>
            }
          />

          <Indication
            text={
              <motion.p
                initial={{ x: "3000px" }}
                animate={{
                  x: 0,
                  transition: { duration: 1, delay: 1, type: "spring" },
                }}
                className="text-xl text-center lg:text-start"
              >
                En 5 minutes, la consultation commence.
              </motion.p>
            }
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300  h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.2, delay: 2 } }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </motion.svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

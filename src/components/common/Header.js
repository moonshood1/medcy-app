export function Header() {
  return (
    <>
      <header className="grid md:grid-cols-2 gap-10 bg-[url('https://res.cloudinary.com/dhc0siki5/image/upload/v1661270049/medcy/Plan_de_travail_4_1_nma92x.jpg')] md:bg-[url('https://res.cloudinary.com/dhc0siki5/image/upload/v1661268394/medcy/Plan_de_travail_2_x9iy0o.png')] h-full md:h-52 lg:h-56 xl:h-96 bg-cover bg-bottom p-14">
        <div>
          <h1 className="text-tahiti text-3xl lg:text-5xl font-bold">Medcy</h1>
        </div>
        <div className="">
          <p className="text-white text-start md:mt-0 xl:mt-20 uppercase text-xl xl:text-2xl font-bold my-3">
            LE SOULAGEMENT D’ACCEDER À UN MÉDECIN,
            <br /> EN QUELQUES MINUTES SANS SE DEPLACER
          </p>
        </div>
      </header>
      <section className="bg-medBlue text-center p-10">
        <p className="text-white text-2xl">La santé aux prix de tous</p>
      </section>
    </>
  );
}

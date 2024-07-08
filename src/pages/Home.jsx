import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <section className=" w-full h-screen bg-[#e8e8e8] flex justify-center items-center z-50 ">
        <div
          className="w-[100%] h-[100%] relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex justify-end items-center "
          id="home"
        >
          <article className="flex flex-col justify-center items-center gap-3 text-center mt-[130%] sm:px-6 md:mt-[70%] lg:mt-[50%] xl:mt-[27%] xl:mr-[2%]">
            <h1 className="font-text2 text-7xl leading-[3.5rem] font-bold text-gray-200 md:text-7xl xl:text-[7rem] 2xl:text-[9rem] bg-clip-text text-transparent bg-gradient-to-b from-stone-500 to-white z-50">
              FAUSTINO ORO
            </h1>
            <p className=" font-text2 font-semibold text-2xl text-stone-600  md:text-3xl xl:text-4xl xl:-mt-3">
              LOREM IMPSUM
            </p>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute mt-2  top-0 right-0 left-0 flex justify-center items-center gap-3  font-text2 text-black py-1  lg:mt-3 lg:justify-end lg:pr-[3%] 2xl:pr-[4%]   2xl:mt-5">
            <ul className="flex gap-3 sm:gap-14 text-lg  2xl:text-2xl 2xl:gap-16 text-gray-400">
              <li className="border border-gray-500 px-5 rounded-xl py-[2.5px]  xl:px-7 2xl:py-[2.7px] 2xl:px-10 cursor-pointer">
                Torneos
              </li>
              <Link to="/games">
                <li className="border border-gray-500 px-6 rounded-xl py-[2.5px] xl:px-7  2xl:py-[2.7px] 2xl:px-10">
                  Partidas
                </li>
              </Link>
              <li className="border border-gray-500 px-6 rounded-xl py-[2.5px] xl:px-7 2xl:py-[2.7px] 2xl:px-10">
                Contacto
              </li>
            </ul>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;

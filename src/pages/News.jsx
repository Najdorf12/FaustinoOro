import { Link } from "react-router-dom";
import CardNotice from "../components/CardNotice";
import Footer from "../components/Footer";
import bgNews from "/bg/bg3.jpg";
import "../components/Buttons/primaryBtn.css";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";

const News = () => {
  return (
    <main className="bg-zinc-800 w-full  relative flex flex-col items-center  overflow-hidden">
      <nav className="w-full absolute top-0 z-50 flex justify-start items-center  ">
        <Link to={"/"} className="font-title z-50">
          <button className="text-white bg-zinc-800 lg:text-zinc-800 lg:bg-white rounded-br-xl px-10 py-2 z-50 xl:text-xl xl:px-12 2xl:px-16 2xl:text-2xl">
            Ir al Inicio
          </button>
        </Link>
      </nav>
      <section className="h-[55vh] w-full flex justify-center items-center relative  lg:justify-start lg:items-start lg:h-[100vh]">
        <article
           id="box-glass" 
          className="w-[95%] border-[2px] border-stone-500 pt-2 pb-4 rounded-xl flex flex-col justify-center items-center gap-4 z-50 text-center lg:mt-0 lg:border-transparent lg:w-[50%] lg:items-center  lg:justify-center lg:gap-5 lg: lg:pl-[2%] lg:h-full 2xl:gap-6 lg:z-40"
        >
          <h3 className="bg-gradient-to-b from-white via-stone-300 to-stone-700 bg-clip-text text-transparent   font-title text-7xl font-medium z-50 lg:text-[6rem] lg:font-medium lg:w-full lg:text-start  xl:text-[8rem] 2xl:text-[10rem]">
            NOTICIAS
          </h3>
          <p className="font-text2 w-full text-base text-balance text-stone-100 lg:text-xl text-center lg:text-start xl:pr-3  2xl: 2xl:text-3xl">
            Bienvenidos a la sección de noticias de Faustino Oro, donde
            compartimos sus logros, próximas competencias y momentos clave en su
            carrera de ajedrez. Explora actualizaciones sobre sus avances y
            eventos especiales.
          </p>
          <div className="flex justify-evenly w-full items-center font-title mt-1 lg:justify-start lg:gap-12 lg:mt-3 2xl:mt-6">
            <Link to={"/"} >
              <PrimaryBtn btnname={"Ver Mas"} />
            </Link>
            <Link to={"/"} >
              <PrimaryBtn btnname={"Torneos"} />
            </Link>
          </div>
        </article>

        <figure className="absolute inset-0 w-full h-full flex justify-center items-center lg:self-end lg:right-0 lg:justify-end ">
          <img
            src={bgNews}
            alt="bg-news"
            className="w-full h-full object-cover object-center lg:w-[50%] lg:rounded-b-2xl  z-40 "
          />
        </figure>
      </section>

      <section className="z-50 w-full flex flex-col justify-start  pb-20 items-center px-3 bg-zinc-800 min-h-screen xl:items-center ">
        <p className="font-text2 w-full  text-stone-100 lg:text-2xl lg:max-w-[750px] text-center mt-3 lg:mt-4 lg:ml-3  2xl: 2xl:text-3xl ">
          Explora actualizaciones sobre sus avances y eventos especiales.
        </p>
        <div className="mt-3 flex flex-wrap gap-4 justify-center items-center w-full xl:mt-8 xl:gap-6 2xl:gap-8 ">
          <CardNotice />
          <CardNotice />
          <CardNotice />
          <CardNotice />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default News;

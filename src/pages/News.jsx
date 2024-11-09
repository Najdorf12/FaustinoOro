import { Link } from "react-router-dom";
import CardNotice from "../components/CardNotice";
import Footer from "../components/Footer";
import bgNews from "/bg/bg3.jpg";

const News = () => {
  return (
    <main className="bg-zinc-800 w-full  relative flex flex-col items-center  overflow-hidden">
      <nav className="w-full absolute top-0 z-50 flex justify-end items-center px-3 mt-1">
        <Link to={"/"}>
          <button className="px-6 bg-zinc-900 text-white">Ir al Inicio</button>
        </Link>
      </nav>
      <section className="h-[60vh] w-full flex justify-center items-start relative  lg:justify-start lg:items-start lg:h-[100vh]">
        <article
          /* id="box-glass2" */
          className="w-[95%] mt-12 flex flex-col justify-center items-center z-50 text-center lg:w-[auto] lg:mt-[2%] lg:items-start lg:ml-[3%] "
        >
          <h3 className="bg-gradient-to-b from-white via-white to-stone-400 bg-clip-text text-transparent   font-title text-6xl font-semibold z-50 lg:text-[7rem] lg:font-medium lg:w-full lg:text-start lg:from-stone-300 lg:via-stone-600 lg:to-stone-800 xl:text-[10rem] 2xl:text-[13rem]">
            NOTICIAS
          </h3>
          <p className="font-text2 w-full text-balance text-white lg:text-2xl lg:max-w-[780px] text-center mt-3 lg:mt-4 lg:ml-3 lg:text-start  2xl: 2xl:text-3xl 2xl:max-w-[950px]">
            Bienvenidos a la sección de noticias de Faustino Oro, donde
            compartimos sus logros, próximas competencias y momentos clave en su
            carrera de ajedrez. Explora actualizaciones sobre sus avances y
            eventos especiales.
          </p>
        </article>
        <figure className="absolute inset-0 w-full h-full flex justify-center items-center ">
          <img
            src={bgNews}
            alt="bg-news"
            className=" w-full h-full object-cover object-center lg:object-[center_-10px] z-40 "
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

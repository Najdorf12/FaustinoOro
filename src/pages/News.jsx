import { Link } from "react-router-dom";
import CardNotice from "../components/CardNotice";
import Footer from "../components/Footer";
import bgNews from "/bg/bg9.jpg";
import bgNews2 from "/bg/bg10.jpg";
import bgNews3 from "/bg/bg1.jpg";
import "../components/Buttons/primaryBtn.css";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";

const News = () => {
  return (
    <main className="bg-zinc-800 w-full  relative flex flex-col items-center  overflow-hidden">
      <nav className="w-full absolute top-0 z-[100] flex justify-start items-center  ">
        <Link to={"/"} className="font-title ">
          <button className="text-white bg-zinc-800 lg:text-zinc-800 lg:bg-white rounded-br-xl px-10 py-2 z-50 xl:text-xl xl:px-12 2xl:px-16 2xl:text-2xl">
            Ir al Inicio
          </button>
        </Link>
      </nav>
      <section className="h-[70vh] w-full flex justify-center items-start pt-[] relative  lg:justify-start lg:items-start lg:h-[100vh]">
        <article
          id="box-glass2"
          className="w-full pt-12 pb-4 border-b border-stone-600 rounded-xl flex flex-col justify-center items-center gap-2 z-50 text-center lg:mt-0 lg:w-[50%] xl:w-[40%] lg:items-start  lg:justify-center lg:gap-5 lg:rounded-r-3xl lg:h-full lg:pl-6 xl:pl-6 2xl:pl-9 2xl:gap-6 lg:z-50 lg:border-r "
        >
          <h3 className="font-title text-white text-6xl font-semibold z-50 lg:text-[6rem] lg:w-full lg:-mt-[5rem] lg:text-start  xl:-mt-[9rem] xl:text-[6.2rem]        2xl:text-[8rem] ">
            NOTICIAS
          </h3>
          <p className="font-text2 w-full px-1 text-base text-balance text-stone-100 lg:text-lg xl:text-xl lg:pr-3  lg:px-0 lg:self-start lg:text-start  2xl: 2xl:text-2xl">
            Bienvenidos a la sección de noticias de Faustino Oro, donde
            compartimos sus logros, próximas competencias y momentos clave en su
            carrera de ajedrez. Explora actualizaciones sobre sus avances y
            eventos especiales.
          </p>
          <div className="flex justify-center w-full items-center font-title mt-3 gap-4 lg:justify-start lg:gap-6  xl:mt-6 xl:gap-12  ">
            <Link to={"/"} className="bg-white rounded-3xl text-zinc-700">
              <PrimaryBtn btnname={"Ver más"} />
            </Link>
            <Link to={"/"} className="bg-zinc-800 rounded-3xl text-white">
              <PrimaryBtn btnname={"Torneos"} />
            </Link>
          </div>
        </article>

        <figure className="absolute inset-0 w-full h-full flex justify-center items-center lg:self-end lg:right-0 lg:justify-end ">
          <img
            src={bgNews}
            alt="bg-news"
            className="w-full h-full object-cover object-center lg:w-[100%] lg:rounded-b-2xl  z-40 "
          />
        </figure>
      </section>

      <section className="relative z-50 w-full flex flex-col justify-start  pb-20 items-center px-3 bg-zinc-800 min-h-screen xl:items-center ">
        <figure className="absolute inset-0 w-full h-[60vh] flex justify-center items-center lg:h-[100vh] lg:self-start lg:right-0 lg:justify-end ">
          <img
            src={bgNews2}
            alt="bg-news"
            className="w-full h-full object-cover object-center lg:w-[100%] lg:rounded-t-3xl  z-40 "
          />
        </figure>
        <article className="flex flex-col items-center justify-center text-balance  lg:self-center">
          <p className="z-50 font-text2 w-full text-xl text-stone-100 lg:text-2xl lg:max-w-[750px] text-center mt-6 lg:mt-4 lg:ml-3  2xl: 2xl:text-3xl ">
            Explora actualizaciones sobre sus avances y eventos especiales.
          </p>
        </article>
      </section>

      <section className="relative w-full h-[60vh]">
        <figure className="absolute inset-0 w-full h-[60vh] flex justify-center items-center lg:self-start lg:right-0 lg:justify-end ">
          {/* <img
            src={bgNews3}
            alt="bg-news"
            className="w-full h-full object-cover object-center lg:w-[50%]  z-40 "
          />*/}
        </figure>
        <div className="z-50 mt-12 flex flex-wrap gap-4 justify-center items-center w-full   lg:sef-start xl:mt-8 xl:gap-6 2xl:gap-8 ">
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

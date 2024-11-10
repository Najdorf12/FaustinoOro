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
          className="w-full border-b-[2px] border-stone-200 pt-12 pb-4 rounded-xl flex flex-col justify-center items-center gap-2 z-50 text-center lg:mt-0 lg:border-transparent lg:w-[50%] lg:items-center lg:border-y-transparent  lg:border-r-[2px] lg:border-white lg:justify-center lg:gap-5 lg:rounded-r-3xl lg:pl-[2%] lg:h-full 2xl:gap-6 lg:z-50"
        >
          <h3 className="bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent  font-title text-6xl font-semibold z-50 lg:text-[6rem] lg:font-medium lg:w-full lg:text-start  xl:text-[8rem] 2xl:text-[10rem]">
            NOTICIAS
          </h3>
          <p className="font-text2 w-full px-1 text-base text-balance text-stone-200 lg:text-xl  lg:text-start lg:px-0 xl:pr-3  2xl: 2xl:text-3xl">
            Bienvenidos a la sección de noticias de Faustino Oro, donde
            compartimos sus logros, próximas competencias y momentos clave en su
            carrera de ajedrez. Explora actualizaciones sobre sus avances y
            eventos especiales.
          </p>
          <div className="flex justify-evenly w-full items-center font-title mt-3 lg:justify-start lg:gap-12 lg:mt-3 2xl:mt-6">
            <Link to={"/"}>
              <PrimaryBtn btnname={"Ver Mas"} />
            </Link>
            <Link to={"/"}>
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

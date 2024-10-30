import imgNews from "../assets/news/imgNews4.jpg";
import imgNews4 from "../assets/news/imgNews2.jpg";
import imgNews2 from "../assets/news/imgNews.jpg";
import { Link } from "react-router-dom";
import CardNotice from "../components/CardNotice";
import Footer from "../components/Footer";

const News = () => {
  return (
    <main className="bg-bluefausti w-full min-h-screen pt-20 relative flex flex-col items-center xl:pt-20 overflow-hidden">
      {/*  <div
        style={{
          clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
        }}
        className="absolute bg-zinc-100 inset-0 z-20"
      ></div> */}
      <nav className="w-full absolute top-0 right-0 z-50 flex justify-start pl-4 pt-4 xl:justify-start xl:pl-12  xl:pt-6 2xl:pl-14">
        <Link to={"/"}>
          <button className="border-l-[2px] border-white text-white cursor-pointer flex items-center justify-between pl-3 w-[100px] xl:text-xl  2xl:text-2xl 2xl:w-[105px]">
            Inicio
            <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-lightbrown text-xl xl:text-2xl"></i>
          </button>
        </Link>
      </nav>

      <article className="w-full flex flex-col justify-center items-center z-50 text-center text-balance">
        <h3
          className="w-[75%] md:w-[50%] xl:w-[35%] self-center rounded-2xl  max-w-[] flex justify-center items-center  font-title text-5xl text-white font-semibold  lg:text-6xl  2xl:text-7xl px-12 xl:px-14 2xl:px-16 py-3 border-[1px]  border-white shadow-lg shadow-zinc-800  z-50  bg-gradient-to-tr from-zinc-600 via-bluefausti to-zinc-800"
        >
          NOTICIAS
        </h3>

        <p className="font-text2 w-full  mt-6 text-zinc-300 px-4  xl:mt-6 xl:text-lg  2xl:text-xl 2xl:max-w-[600px] bg-gradient-to-tr from-zinc-600 via-bluefausti to-zinc-800 py-3 rounded-2xl">
          Bienvenidos a la sección de noticias de Faustino Oro, donde
          compartimos sus logros, próximas competencias y momentos clave en su
          carrera de ajedrez. Explora actualizaciones sobre sus avances, eventos
          especiales y el detrás de escena de su entrenamiento para convertirse
          en uno de los grandes del tablero.
        </p>
      </article>

      <section className="z-50 w-full flex flex-col justify-start pt-12 pb-20 items-center px-3 bg-zinc-800 min-h-screen xl:items-start 2xl:mt-28 xl:pt-20">
       
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

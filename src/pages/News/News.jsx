import { Link } from "react-router-dom";
import CardNotice from "./CardNotice";
import bgNews from "/bg/bg3.webp";
import "../../components/Buttons/primaryBtn.css";
import iconNav from "/iconNav.png";
import { useAdminData } from "../Admin/AdminDataContext";
import { useEffect } from "react";

const News = () => {
  const { news } = useAdminData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zinc-800 w-full relative flex flex-col items-center  overflow-hidden">
      <nav className="w-full absolute top-0 z-[100] flex justify-start items-center  ">
        <Link to={"/"} className="font-title ">
          <button className="text-white  bg-zinc-800 rounded-br-xl px-12 py-2 z-50 xl:text-xl xl:px-14 2xl:px-16 2xl:text-2xl">
            Ir al Inicio
          </button>
        </Link>
      </nav>

      <section className="h-[65vh] w-full flex justify-center items-start pt-[] relative  lg:justify-start lg:items-start lg:h-screen">
        <article
          id="box-glass2"
          className="w-full pt-14 pb-4 border-b border-stone-500 rounded-xl flex flex-col justify-center items-center gap-2 z-50 text-center lg:mt-0 lg:w-[50%] xl:w-[40%] lg:items-start  lg:justify-center lg:gap-5 lg:rounded-r-3xl lg:border-stone-200 lg:h-full lg:pl-6 xl:pl-6 2xl:pl-9 2xl:gap-6 lg:z-50 lg:border-r "
        >
          <figure className="absolute top-1 right-2 lg:right-3 flex justify-center items-center lg:bottom-3 lg:items-end">
            <img
              src={iconNav}
              alt="iconNav"
              className="object-cover object-center w-[3rem] lg:w-[4rem]"
            />
          </figure>
          <h3 className="font-title text-white text-6xl font-semibold z-50 lg:text-[6rem] lg:w-full lg:-mt-[5rem] lg:text-start  xl:-mt-[9rem] xl:text-[6.2rem]  2xl:text-[8rem] ">
            NOTICIAS
          </h3>
          <p className="font-text2 w-full sm:px-2 mt-2  text-sm text-center text-pretty text-zinc-300 lg:text-lg xl:text-xl lg:pr-3  lg:px-0 lg:self-start lg:text-start  2xl: 2xl:text-2xl">
            Bienvenidos a la sección de noticias de Faustino Oro, <br />
            donde compartimos sus logros, próximas competencias <br />y momentos
            clave en su carrera de ajedrez.
            {/*   */}
          </p>
          <div className="flex justify-center w-full items-center mt-3 gap-4 lg:justify-start lg:gap-6  xl:mt-6 xl:gap-7 2xl:gap-9 ">
            <a href="#notices_section">
              <button className="animated-button bg-whiteCustom rounded-3xl w-[190px] pl-9 shadow-lg shadow-zinc-900 border border-zinc-500 lg:w-[200px] py-1 2xl:w-[230px] group">
                <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-600 2xl:text-4xl"></i>
                <span className="text font-title2  text-base 2xl:text-lg text-zinc-800 group-hover:text-whiteCustom">
                  Ver más
                </span>
                <span className="circle bg-zinc-700"></span>
                <i className="bx bx-right-arrow-alt arr-1 text-3xl  text-sky-600 2xl:text-4xl"></i>
              </button>
            </a>
            <Link to={"/tournaments"}>
              <button className="animated-button bg-zinc-800 rounded-3xl w-[190px] pl-9 shadow-lg shadow-zinc-900 border border-zinc-600 lg:w-[200px] py-1 2xl:w-[230px] group">
                <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-600 2xl:text-4xl"></i>
                <span className="text font-title2  text-base 2xl:text-lg text-zinc-400 group-hover:text-whiteCustom">
                  Torneos
                </span>
                <span className="circle bg-zinc-700"></span>
                <i className="bx bx-right-arrow-alt arr-1 text-3xl  text-sky-600 2xl:text-4xl"></i>
              </button>
            </Link>
          </div>
        </article>
        <figure className="absolute inset-0 w-full h-full flex justify-center items-center lg:self-end lg:right-0 lg:justify-end ">
          <img
            src={bgNews}
            alt="bg-news"
            className="w-full h-full object-cover object-center rounded-b-2xl  z-40 "
          />
        </figure>
      </section>

      <section className="relative z-50 w-full py-16 xl:pt-12 xl:pb-20 xl:mt-16 2xl:mt-24 2xl:pb-28">
        <article className="flex flex-col h-full px-3 items-center justify-start gap-3  text-balance  lg:self-center lg:gap-8 xl:gap-12 2xl:gap-14">
          <p className="z-50 font-title4 w-full text-xl text-zinc-100 text-center xl:max-w-[1000px] lg:text-3xl xl:text-4xl  2xl:text-5xl 2xl:max-w-[1400px] ">
            Explora actualizaciones sobre sus avances y eventos especiales.
          </p>

          <article
            id="box-glass2"
            className="z-50 relative pt-3 pb-8 md:pb-9 px-3  rounded-xl border border-zinc-700 max-w-[600px] flex justify-center items-center md:mt-3 xl:max-w-[700px] xl:pt-4 xl:pb-12 xl:mt-1 2xl:max-w-[870px]  2xl:pb-12 2xl:pt-6"
          >
            <p className="text-base text-zinc-500 font-text2 text-balance text-center font-normal  md:text-lg md:px-2 lg:text-lg xl:text-xl 2xl:text-2xl">
              Con
              <span className="text-sky-400">
                {" "}
                dedicación, esfuerzo y disciplina
              </span>
              , Faustino sigue conquistando nuevos desafíos en cada partida.
              Aquí podrás conocer no solo sus logros más recientes, sino también
              el arduo camino de entrenamiento y preparación que los hace
              posibles.
            </p>
            <figure className="absolute bottom-0 right-1">
              <i className="bx bxs-doughnut-chart text-4xl md:text-5xl z-50 text-sky-500  2xl:text-6xl"></i>
            </figure>
          </article>
        </article>
      </section>

      <section
        id="notices_section"
        className="relative w-full min-h-screen pb-20 lg:pb-32"
      >
        <article className="mt-9 flex flex-col justify-start pl-3 items-start text-balance lg:items-center text-center lg:pl-0 lg:mt-[4%] ">
          <p className="text-6xl flex items-center gap-3 xl:gap-12  text-zinc-100 font-medium font-title4 lg:text-center lg:text-7xl xl:text-8xl 2xl:text-9xl">
            <span className="hidden lg:flex w-[400px] h-[1px] bg-[#4b718a]"></span>
            noticias
            <span className="hidden lg:flex w-[400px] h-[1px] bg-[#4b718a]"></span>
          </p>
          <p className="font-text2 text-zinc-500 text-start  mt-6 lg:text-lg lg:text-center lg:max-w-[770px] xl:text-xl 2xl:text-2xl 2xl:mt-9xl ">
            Aquí encontrarás actualizaciones en tiempo real y la cobertura de
            los momentos más importantes de su trayectoria profesional.
            {/* ¡No te pierdas sus próximos torneos y logros! Síguenos para estar al
            tanto de las últimas noticias sobre Faustino y su camino en el
            ajedrez. */}
          </p>
        </article>

        <div className="flex flex-wrap gap-y-6 gap-x-20 justify-start pl-2 mt-10 w-full   md:justify-center lg:gap-x-28 lg:mt-16 lg:px-40 xl:mt-20 lg:gap-y-10 2xl:gap-x-28 2xl:gap-y-14  ">
          {news?.map((news, i) => (
            <div key={i} className="slide">
              <CardNotice news={news} index={i} />
            </div>
          ))}
        </div>
      </section>
      <div className="absolute w-full bottom-0 flex justify-center items-center gap-2 mb-1 font-title text-sm 2xl:text-base text-zinc-600 z-50  mt-12 lg:mt-9">
          <i className="bx bx-copyright text-lg"></i>
          <span>Faustino Oro </span>
        </div>
    </main>
  );
};
export default News;

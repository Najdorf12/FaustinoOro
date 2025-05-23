import { useAdminData } from "../Admin/AdminDataContext";
import CardTournamentPage from "./CardTournamentPage";
import iconNav from "/iconNav.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Tournaments = () => {
  const { tournaments } = useAdminData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-zinc-800 font-text2 pb-12 lg:pb-40">
      <nav className="w-full flex justify-between items-center pt-1 px-4 lg:pt-2 lg:px-12 xl:pt-3 xl:px-16">
        <figure className="w-10 lg:w-12">
          <img src={iconNav} alt="icon-nav" className="w-full object-center" />
        </figure>
        <ul className="flex items-center gap-6 text-whiteCustom text-base lg:text-lg lg:gap-8 xl:text-xl 2xl:text-2xl">
          <Link to={"/"}>
            <li className="border-l border-zinc-600 pl-2 lg:pl-3 hover:text-sky-800 duration-500">
              Inicio
            </li>
          </Link>
          <Link to={"/news"}>
            <li className="border-l border-zinc-600 pl-2 lg:pl-3 hover:text-sky-800 duration-500">
              Noticias
            </li>
          </Link>
        </ul>
      </nav>
      <article className="mt-10 flex flex-col px-3 text-center text-pretty lg:pl-20 lg:mt-12 lg:items-center">
        <h6 className="text-5xl font-title4 font-medium text-whiteCustom lg:text-7xl xl:text-8xl 2xl:text-9xl">
          TORNEOS
        </h6>
        <p className="mt-3 text-zinc-500 lg:mt-5 lg:text-lg max-w-[700px] 2xl:text-2xl 2xl:max-w-[900px]">
          Faustino ya se prepara para los próximos desafíos en su carrera
          ajedrecística. Consulta aquí la lista de próximos torneos en los que
          participará. Sigue su calendario y mantente al día con su increíble
          recorrido competitivo.
        </p>
      </article>
      <ul className="mt-14 flex flex-col items-center gap-y-12 lg:gap-y-16 lg:mt-24 2xl:gap-y-20">
        {tournaments?.map((tournament) => (
          <CardTournamentPage tournament={tournament} />
        ))}
      </ul>
      <div className="absolute w-full bottom-0 flex justify-center items-center gap-2 mb-1 font-title text-sm 2xl:text-base text-zinc-600 z-50  mt-12 lg:mt-9">
        <i className="bx bx-copyright text-lg"></i>
        <span>Faustino Oro </span>
      </div>
    </section>
  );
};

export default Tournaments;

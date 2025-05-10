import CardTournamentHome from "./CardTournamentHome";
import { Link } from "react-router-dom";

const TournamentsSection = ({
  screenStats,
  displayedTournaments,
  tournaments,
}) => {
  return (
    <>
      <section
        id="six_section"
        className="overflow-hidden relative w-full h-screen z-5 pt-10 pl-0 pr-1 2xl:pt-16"
      >
        <div
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-whiteCustom absolute inset-0"
        ></div>
        <article className="flex flex-col gap-4 -mt-6">
          <h6 className="text-6xl font-title font-semibold text-bluefausti md:text-6xl lg:text-[15vh] xl:text-[16vh] xl:pl-9 2xl:pl-8 z-50">
            TORNEOS
          </h6>
          <div
            id="line-tournament"
            className="h-[2px] w-[0%] bg-white z-50 xl:mt-3"
          ></div>
            <Link
            to={"/tournaments"}
            className="flex justify-center w-full absolute bottom-3  md:bottom-5 mx-auto items-center gap-2 z-50 xl:bottom-6 2xl:bottom-8"
          >
            <button className="animated-button rounded-3xl w-[180px] pl-10 py-1 shadow-lg shadow-zinc-600 border border-stone-500  bg-zinc-700 lg:w-[210px] lg: lg:rounded- 2xl:pl-14 2xl:w-[230px] group">
              <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-700 2xl:text-4xl"></i>
              <span className="text font-title2 text-whiteCustom text-base 2xl:text-lg group-hover:text-zinc-600">
                Ir a torneos
              </span>
              <span className="circle bg-white"></span>
              <i className="bx bx-right-arrow-alt arr-1 text-3xl text-whiteCustom  group-hover:text-sky-700 2xl:text-4xl"></i>
            </button>
          </Link>
          <ul
            id="tournaments"
            className="rounded-lg pr-3 pt-2 pb-6 overflow-y-scroll grid grid-cols-1 gap-6 z-50 lg:grid-cols-2  lg:w-full lg:pt-6 xl:gap-10  place-items-center lg:mx-auto"
          >
            {tournaments
              ?.slice(0, displayedTournaments)
              .map((tournament, i) => (
                <CardTournamentHome
                  screenStats={screenStats}
                  key={i}
                  tournament={tournament}
                  index={i + 1}
                />
              ))}
          </ul>
        </article>
     
      </section>
    </>
  );
};
export default TournamentsSection;

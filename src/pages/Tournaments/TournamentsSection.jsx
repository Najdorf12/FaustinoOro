import CardTournamentHome from "./CardTournamentHome";
import { Link } from "react-router-dom";

const TournamentsSection = ({
  screenStats,
  displayedTournaments,
  tournaments,
}) => {
  const hasEmptySpace = tournaments?.length < displayedTournaments;
  const emptyItemsCount = displayedTournaments - (tournaments?.length || 0);
  console.log(emptyItemsCount);

  return (
    <>
      <section
        id="six_section"
        className="overflow-hidden relative w-full h-screen z-5 pt-10 pl-0 pr-1 2xl:pt-16"
      >
        <div
          style={{ clipPath: "polygon(100% 0, 0 100%, 0 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-whiteCustom absolute -top-[1px] left-0 z-10"
        ></div>
        <article className="flex flex-col gap-4 -mt-6 h-full">
          <h6 className="text-6xl pl-3 font-title font-semibold text-bluefausti md:text-6xl lg:text-[15vh] xl:text-[16vh] xl:pl-9 2xl:pl-8 z-50">
            TORNEOS
          </h6>
          <div
            id="line-tournament"
            className="h-[2px] w-[0%] bg-white z-50 xl:mt-3"
          ></div>

          <div className="flex-1 flex flex-col ">
            <ul
              id="tournaments"
              className="rounded-lg px-2 pt-2 pb-6 overflow-y-scroll grid grid-cols-1 gap-6 z-50 lg:grid-cols-2 lg:w-full lg:pt-6 xl:gap-10 place-items-center lg:mx-auto"
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

              {hasEmptySpace &&
                Array.from({ length: emptyItemsCount }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="relative w-full h-[93px] max-w-[450px] lg:h-[116px] xl:max-w-[470px] 2xl:h-[130px] 2xl:max-w-[500px]"
                  ></div>
                ))}
            </ul>
          </div>

          <Link
            to={"/tournaments"}
            className="flex justify-center w-full absolute bottom-4 md:bottom-5 mx-auto items-center gap-2 z-50 xl:bottom-6 2xl:bottom-8"
          >
            <button className="animated-button rounded-3xl w-[180px] pl-10 py-1 shadow-lg shadow-zinc-600 border border-stone-500 bg-zinc-700 lg:w-[210px] lg:rounded- 2xl:pl-14 2xl:w-[230px] group">
              <i className="bx bx-right-arrow-alt arr-2 text-3xl text-sky-700 2xl:text-4xl"></i>
              <span className="text font-title2 text-whiteCustom text-base 2xl:text-lg group-hover:text-zinc-600">
                Ir a torneos
              </span>
              <span className="circle bg-white"></span>
              <i className="bx bx-right-arrow-alt arr-1 text-3xl text-whiteCustom group-hover:text-sky-700 2xl:text-4xl"></i>
            </button>
          </Link>
        </article>
      </section>
    </>
  );
};
export default TournamentsSection;

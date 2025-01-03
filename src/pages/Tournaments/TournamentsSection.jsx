import CardTournamentHome from "./CardTournamentHome";
import { useAdminData } from "../Admin/AdminDataContext";

const TournamentsSection = ({ screenStats, displayedTournaments, tournaments }) => {
  return (
    <>
      <section
        id="six_section"
        className="overflow-hidden relative bg-whiteCustom  w-full h-screen z-5 pt-10 pl-2 pr-1 2xl:pt-16"
      >
        <div
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-whiteCustom absolute  inset-0"
        ></div>
        <article className="flex flex-col gap-6 -mt-6">
          <h6 className="text-6xl font-title font-semibold text-bluefausti lg:text-7xl xl:pl-6 2xl:pl-8 2xl:text-8xl z-50">
            TORNEOS
          </h6>
          <div
            id="line-tournament"
            className="h-[2px] w-[0%] bg-white z-50"
          ></div>
          <ul
            id="tournaments"
            className="rounded-lg pr-3 pt-2 pb-6 overflow-y-scroll grid grid-cols-1 gap-6 z-50 mt-3 lg:grid-cols-2   lg:mt-8  lg:w-full xl:gap-10  place-items-center lg:mx-auto"
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

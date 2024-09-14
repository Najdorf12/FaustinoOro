import imgTorneo from "../assets/img-torneo.jpg";
const CardTournament = ({ tournament, index }) => {
  return (
    <>
      <li
        id="tournament"
        className="flex rounded-xl  pr-2 w-full h-[90px] shadow-lg shadow-gray-600 lg:shadow-xl border border-white max-w-[450px] xl:h-[110px] xl:w-[460px] 2xl:h-[120px] 2xl:w-[500px]  "
      >
        <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
          0{index.toString()}
        </div>
        {/*  <picture className="w-10 h-10  max-w-[120px]">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={tournament.images}
            alt=""
          />
        </picture> */}
        <article className="pt-1  pb-1 pl-3 font-text2 flex flex-col justify-between  w-[85%]">
          <h6 className="text-base text-white font-medium leading-5   max-w-[80%] xl:text-lg xl:leading-5 2xl:text-xl ">
            {tournament.title.toUpperCase()}
          </h6>
          <div className="flex flex-col text-gray-400 ">
            <p className="text-base font-normal xl:text-lg ">
              {tournament.location}
            </p>
            <p className="font-title3 text-sm text-stone-400 2xl:mt-1 xl:text-base">
              {tournament.time}
            </p>
          </div>
        </article>
      </li>
    </>
  );
};

export default CardTournament;

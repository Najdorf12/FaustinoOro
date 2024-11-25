const CardTournament = ({ tournament, index, screenStats }) => {
  return (
    <>
      <li
        id={screenStats < 1000 ? "box-glass" : ""}
        className="relative flex rounded-xl bg-gradient-to-br from-bluefausti via-zinc-800  lg:to-zinc-800 pr-2 w-full h-[90px]   border  border-stone-500 max-w-[450px]  xl:h-[110px] xl:w-[460px] 2xl:h-[120px] 2xl:w-[530px]"
      >
        <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl z-50 text-white font-title3 2xl:text-5xl">
          0{index.toString()}
        </div>
        <article className="pt-1  pb-1 pl-3 font-text2 flex flex-col justify-between  w-[85%]">
          <h6 className="text-base text-stone-100 font-medium leading-5   max-w-[80%] xl:text-lg xl:leading-5 2xl:text-xl ">
            {tournament.title.toUpperCase()}
          </h6>
          <div className="flex flex-col text-stone-400">
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

import { Link } from "react-router-dom";

const CardTournament = ({ tournament, index, screenStats }) => {
  return (
    <Link
      id={screenStats < 1000 ? "box-glass" : ""}
      to={"/tournaments"}
      className="relative flex rounded-xl bg-gradient-to-br  pr-2 w-full h-[93px]   border  border-stone-300 max-w-[450px] py-[2px] lg:h-[116px] lg:py-1 xl:max-w-[470px] 2xl:h-[130px] 2xl:max-w-[500px]"
    >
      <div className="absolute right-0 top-0 mt-1 mr-2 text-4xl z-50 text-white font-title3 lg:text-5xl lg:mt-1 2xl:text-6xl">
        0{index.toString()}
      </div>
      <article className="pt-1  pb-1 pl-3 font-text2 flex flex-col justify-between  w-[85%]">
        <h6 className="text-base text-bluefausti font-medium leading-4  max-w-[80%] xl:text-xl xl:leading-5 ">
          {tournament.title.toUpperCase()}
        </h6>
        <div className="flex flex-col text-zinc-500 font-text2 text-base xl:text-lg">
          <p className=" font-normal  ">{tournament.location}</p>
          <p className="text-zinc-500 2xl:mt-1  leading-3 lg:leading-4">
            {tournament.time}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CardTournament;

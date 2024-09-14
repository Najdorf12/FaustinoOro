import imgTorneo from "../assets/img-torneo.jpg";
const CardTournament = ({ tournament, index }) => {
  return (
    <>
      <li
        id="tournament" 
        className="flex rounded-xl  pr-2 w-full h-[90px] shadow-lg shadow-gray-700 lg:shadow-xl border border-white 2xl:h-[150px] 2xl:w-[550px]"
      >
        <div className="absolute right-0 top-0 mt-2 mr-2 text-4xl text-white font-title3 2xl:text-5xl">
          0{index.toString()}
        </div>
        <picture className="w-10 h-10  max-w-[120px]">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={tournament.images}
            alt=""
          />
        </picture>
        <article className="pt-1  pb-1 pl-3 font-text2 flex flex-col justify-between  w-[85%]">
          <h6 className="text-base text-stone-400 font-medium leading-5   max-w-[80%] 2xl:text-2xl 2xl:leading-6">
            {tournament.title.toUpperCase()}
          </h6>
         
            <p className="text-base font-normal text-stone-500 2xl:text-xl 2xl:mt-2">
              {tournament.location}
            </p>
            <p className="font-title3 text-sm text-stone-500 2xl:text-lg 2xl:mt-2 ">
              {tournament.time}
            </p>
          
        </article>
      </li>
    </>
  );
};

export default CardTournament;

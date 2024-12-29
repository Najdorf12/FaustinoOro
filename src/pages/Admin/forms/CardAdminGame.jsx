import { useState } from "react";
import { Link } from "react-router-dom";

const CardAdminGame = ({ game, selectGame, deleteGame }) => {
  const {_id, players, white, black, location, content, pgn } = game;

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
    <>
      (
      <section className="relative  bg-[#212121] border border-[#92856e] w-[95%] max-w-[500px] rounded-3xl flex  hover:scale-105 duration-500">
        <article className="h-full mt-1 flex flex-col gap-1 w-full px-2">
          <p className="text-xl  px-3 flex items-center justify-center gap-3 font-text text-center font-semibold text-white leading-5 border-b border-[#92856e] py-2">
            {players}
          </p>
          <p className="pl-2 mt-1 font-semibold text-base text-zinc-400">
            {isExpanded ? content : truncateText(content, 150)}
          </p> 
          <p className="pl-2 mt-1 font-semibold text-base text-zinc-500">
            {location}
          </p> 
          <div className="font-text font-semibold text-base text-[#af2b48] tracking-wide flex justify-evenly items-center mt-2 pr-3">
            <span className="flex items-center gap-1">
              <i className="bx bxs-polygon text-white"></i> {white}
            </span>
            <span className="flex items-center gap-1">
              <i className="bx bxs-polygon text-black"></i> {black}
            </span>
          </div>      

          <p className="pl-2 font-semibold text-sm text-zinc-500">
            {isExpanded ? pgn : truncateText(pgn, 100)}
            {pgn.length > 100 && (
              <span
                onClick={toggleExpand}
                className="cursor-pointer text-[#922c42] ml-1 hover:underline"
              >
                {isExpanded ? "Ver menos" : "Ver más"}
              </span>
            )}
          </p>

          <div className="w-full mt-4 mb-1">
            <section className="flex justify-evenly items-center text-[#af2b48] mr-2">
              <div className="flex items-center gap-2 text-[1rem]">
                <i
                  onClick={() => selectGame(game, _id)}
                  className="bx bxs-edit-alt cursor-pointer hover:scale-110 hover:text-gray-100 duration-300 text-3xl"
                ></i>
                Editar
              </div>
              <div className="flex items-center gap-2 text-[1rem]">
                <i
                  onClick={() => deleteGame(_id)}
                  className="bx bxs-trash-alt cursor-pointer hover:scale-110 hover:text-gray-100 duration-300 text-3xl"
                ></i>
                Eliminar
              </div>
            </section>
          </div>
        </article>
      </section>
    </>
  );
};

export default CardAdminGame;

import { useState } from "react";
import { Link } from "react-router-dom";

const CardAdminGame = ({ game, onEdit, onDelete }) => {
  const { _id, players, white, black, location, content, pgn } = game;

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
    <>
      (
      <section className="relative  border-b border-zinc-700 w-[95%] max-w-[450px] rounded-lg flex  hover:scale-105 duration-500 pb-1">
        <article className="h-full  flex flex-col gap-1 w-full text-balance">
          <p className="text-xl font-medium  px-3 flex items-center justify-center gap-3 font-text text-center  text-whiteCustom leading-5 border-b border-zinc-700 py-2 bg-sky-800 rounded-t-lg ">
            {players}
          </p>
          <p className="px-2 xl:px-3 mt-1 font-medium  text-base text-zinc-400 xl:mt-2 xl:text-lg">
            {isExpanded ? content : truncateText(content, 150)}
          </p>
          <p className="px-2 xl:px-3 font-medium  text-base text-zinc-400 xl:text-lg">
            {location}
          </p>

          <p className="px-2 xl:px-3  text-sm text-zinc-500 xl:text-base xl:mt-1">
            {pgn}
          </p>
          <div className="font-text2  text-base text-zinc-500 tracking-wide flex justify-start px-2 xl:px-3 gap-3 items-center mt-2 pr-3 xl:mt-3">
            <span className="flex items-center gap-1">
              <i className="bx bxs-polygon text-white"></i> {white}
            </span>
            <span className="flex items-center gap-1">
              <i className="bx bxs-polygon text-black"></i> {black}
            </span>
          </div>
          <div className="w-full mt-4 mb-1">
            <div className="flex justify-evenly items-center text-sky-800 mr-2">
              <div
                onClick={onEdit}
                className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-whiteCustom duration-500"
              >
                <i className="bx bxs-edit-alt text-3xl"></i>
                Editar
              </div>
              <div
                onClick={onDelete}
                className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-whiteCustom duration-500"
              >
                <i className="bx bxs-trash-alt text-3xl"></i>
                Eliminar
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default CardAdminGame;

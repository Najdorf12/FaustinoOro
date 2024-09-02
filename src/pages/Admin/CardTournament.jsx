import imgFausti from "../../assets/fausti2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardTournament = ({ tournament, selectTournament, deleteTournament }) => {
  const { _id, title, description, content, location, time, images } =
    tournament;
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
        <article className="h-full mt-1 flex flex-col gap-1 w-full">
          <p className="text-xl  px-3 flex items-center gap-3   font-text text-center font-semibold text-white leading-5 border-b border-[#92856e] py-2">
            <picture className="w-[130px]">
              <Link to={`/${_id}`}>
                <img
                  loading="lazy"
                  className="w-full  rounded-2xl object-cover"
                  src={
                    !images[0]?.secure_url ? imgFausti : images[0]?.secure_url
                  }
                />
              </Link>
            </picture>
            {title.toUpperCase()}
          </p>

          <div className="font-text font-semibold text-base text-[#af2b48] tracking-wide flex justify-between items-center mt-2 pr-3">
            <span className=" px-2  rounded-lg flex justify-start items-center">
              {location.toUpperCase()}
            </span>
            <p classsName="">{time}</p>
          </div>

          <p className="pl-2 font-semibold text-base text-white">
            {isExpanded ? description : truncateText(description, 150)}
          </p>

          <p className="pl-2 font-semibold text-sm text-zinc-500">
            {isExpanded ? content : truncateText(content, 100)}
            {content.length > 100 && (
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
                  onClick={() => selectTournament(tournament, _id)}
                  className="bx bxs-edit-alt cursor-pointer hover:scale-110 hover:text-gray-100 duration-300 text-3xl"
                ></i>
                Editar
              </div>
              <div className="flex items-center gap-2 text-[1rem]">
                <i
                  onClick={() => deleteTournament(_id)}
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

export default CardTournament;

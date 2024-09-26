import imgFausti from "../../assets/fausti2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardAdminNew = ({ notice, selectNotice, deleteNotice }) => {
  const { _id, title, description, content, category, images } = notice;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
    <>
        (
    <section className="relative p-[6px] bg-[#212121] w-full border border-[#92856e] max-w-[300px] rounded-3xl flex flex-col justify-center items-center hover:scale-105 duration-500">
      <picture className="w-[90%] h-40">
        <Link to={`/news/${_id}`}>
          <img
            loading="lazy"
            className="w-full h-full rounded-2xl object-cover"
            src={!images[0]?.secure_url ? imgFausti : images[0]?.secure_url}
          />
        </Link>
      </picture>

      <article className="h-full mt-3 flex flex-col gap-1 w-full">
        <p className="text-xl min-h-14 font-text text-center font-semibold text-white leading-5 border-b border-[#92856e] py-2">
          {title.toUpperCase()}
        </p>

        <span className="mt-2 px-2 font-text font-semibold text-base text-[#af2b48] tracking-wide rounded-lg flex justify-start items-center">
          {category.toUpperCase()}
        </span>

        <p className="pl-2 font-semibold text-base text-white">
          {isExpanded ? description : truncateText(description, 150)}
        </p>

        <p className="pl-2 font-semibold text-sm text-zinc-500">
          {isExpanded ? content : truncateText(content, 100)}
          {content.length > 100 && (
            <span
              onClick={toggleExpand}
              className="cursor-pointer text-[#af2b48] ml-1 hover:underline"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </span>
          )}
        </p>

        <div className="w-full mt-4 mb-1">
          <section className="flex justify-evenly items-center text-[#af2b48] mr-2">
            <div className="flex items-center gap-2 text-[1rem]">
              <i
                onClick={() => selectNotice(notice, _id)}
                className="bx bxs-edit-alt cursor-pointer hover:scale-110 hover:text-gray-100 duration-300 text-3xl"
              ></i>
              Editar
            </div>
            <div className="flex items-center gap-2 text-[1rem]">
              <i
                onClick={() => deleteNotice(_id)}
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

export default CardAdminNew;

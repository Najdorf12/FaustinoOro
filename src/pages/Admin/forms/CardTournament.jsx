import imgFausti from "../../../assets/fausti2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardTournament = ({ tournament, onEdit, onDelete }) => {
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
      <section className="relative w-full  border border-zinc-600 max-w-[370px] rounded-xl flex flex-col justify-center items-center hover:scale-105 duration-500">
        <figure className="w-full h-56 flex justify-center p-2">
          <Link to={`/tournaments/`}>
            <img
              loading="lazy"
              className="w-full h-full rounded-xl object-cover max-w-[250px]"
              src={images[0]?.secure_url ? images[0]?.secure_url : imgFausti }
            />
          </Link>
        </figure>

        <article className="h-full flex flex-col items-start justify-center gap-1 w-full pb-1 text-balance">
          <p className="text-lg px-2 py-2  min-h-14 font-title  font-medium text-whiteCustom leading-5 bg-sky-800 w-full">
            {title.toUpperCase()}
          </p>

          <div className="px-2 font-text font-medium text-base pt-1 text-zinc-400 tracking-wide rounded-lg flex justify-between w-full items-center">
            {location.toUpperCase()}
            <div>{time}</div>
          </div>

          <p className="pl-2 font-medium text-base text-zinc-400">
            {isExpanded ? description : truncateText(description, 150)}
          </p>

          <p className="pl-2 font-medium text-sm text-zinc-600">{content}</p>

          <div className="w-full mt-4 mb-1">
            <section className="flex justify-evenly items-center text-sky-800 mr-2">
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
            </section>
          </div>
        </article>
      </section>
    </>
  );
};

export default CardTournament;

/* DJERBA CHESS FESTIVAL 2025

DJERBA, TÚNEZ
15/Feb/2025 23/Feb/2025
Gran Festival de ajedrez organizado anualmente

Jugaré en la Isla de Djerba, un torneo cerrado de Masters, de 9 rondas a ritmo clásico, sistema Suizo. https://djerbachessfestival.com/fr/data/masters-2025
// 
// 
// 
// MAGISTRAL DE AJEDREZ PUNTA DEL ESTE

PUNTA DEL ESTE, URUGUAY
14/Mar/2025 23/Mar/2025
Primer Festival Internacional de Ajedrez en Punta del Este

Torneo Round Robin a doble vuelta, en el cual se enfrentarán 6 destacados ajedrecistas, con un promedio de 2500 de ELO.
// 

RÁPIDO DE LEÓN

LEÓN, ESPAÑA
Jul 2025
Torneo Rápido de León
//  */
const CardTournamentPage = ({ tournament }) => {
  const { title, description, content, location, time, images } = tournament;
  return (
    <li className="">
      <figure className="w-full">
        <img className="w-[300px] object-cover object-center" src={images[0].secure_url} alt="img-tournament" />
      </figure>
      <article className="text-balance font-text2 text-zinc-500 flex flex-col items-start  mt-4">
        <div className="text-2xl text-whiteCustom bg-sky-800">{title}</div>
        <div>{description}</div>
        <div>{location}</div>
        <div>{time}</div>
        <div>{content}</div>
      </article>
    </li>
  );
};

export default CardTournamentPage;

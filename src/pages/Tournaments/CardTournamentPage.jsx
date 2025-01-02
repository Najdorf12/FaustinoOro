const CardTournamentPage = ({ tournament }) => {
  const { title, description, content, location, time, images } = tournament;
  return (
    <li className="px-3 flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-3 xl:gap-6">
      <figure className="w-full">
        <img
          className="w-[300px] object-cover object-center"
          src={images[0].secure_url}
          alt="img-tournament"
        />
      </figure>
      <article className="text-balance font-text2 text-zinc-500 flex flex-col items-start  mt-4 text-xl  lg:max-w-[700px] xl:max-w-[900px]">
        <div className="text-2xl text-whiteCustom bg-sky-800 py-2 pl-3 w-[80%]">
          {title}
        </div>
        <div className="mt-3">{description}</div>
        <div className="">{location}</div>
        <div className="">{time}</div>
        <div className="text-sm md:text-base mt-3 text-zinc-600">{content}</div>
      </article>
    </li>
  );
};

export default CardTournamentPage;

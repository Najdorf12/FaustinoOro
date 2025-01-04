const CardTournamentPage = ({ tournament }) => {
  const { title, description, content, location, time, images } = tournament;
  return (
    <li className="px-3 flex flex-col lg:flex-row lg:justify-center lg:items-start  lg:gap-3 xl:gap-6">
      <figure className="w-full">
        <img
          className="w-[300px] object-cover object-center "
          src={images[0].secure_url}
          alt="img-tournament"
        />
      </figure>
      <article className="text-balance font-text2 text-zinc-500 flex flex-col items-start gap-1  mt-4 text-lg lg:text-xl  lg:mt-0 lg:gap-2  lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1000px]">
        <div className="text-2xl lg:text-3xl  text-whiteCustom bg-sky-800 py-2 pl-3 w-full md:w-[80%] ">
          {title.toUpperCase()}
        </div>
        <div className="mt-2 flex justify-center items-center gap-2 lg:gap-3">
          <i className="bx bxs-map text-zinc-600 text-2xl lg:text-3xl"></i>
          {location}
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-3">
          <i className="bx bx-calendar text-zinc-600  text-2xl lg:text-3xl"></i>
          {time}
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-3">
          <i className="bx bxs-pen text-zinc-600  text-2xl lg:text-3xl"></i>
          {description}
        </div>
        <div className="text-sm md:text-base mt-3 text-zinc-600">{content}</div>
      </article>
    </li>
  );
};

export default CardTournamentPage;

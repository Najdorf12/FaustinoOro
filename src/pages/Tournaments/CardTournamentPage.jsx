const CardTournamentPage = ({ tournament }) => {
  const { title, description, content, location, time, images } = tournament;
  return (
    <li className="relative px-3 pt-1 flex flex-col  rounded-lg border-b border-zinc-700 pb-12 lg:pb-6  lg:flex-row lg:justify-center lg:items-start lg:gap-12">
      <figure className="w-full flex justify-center lg:w-auto">
        <img
          className="w-[300px] object-cover object-center rounded-lg 2xl:w-[350px]"
          src={images[0].secure_url}
          alt="img-tournament"
        />
      </figure>
      <article className="text-balance font-text2 text-zinc-500 flex flex-col items-start gap-1  mt-4 text-lg lg:text-xl  lg:mt-0 lg:gap-2 lg:max-w-auto xl:w-[700px] 2xl:w-[800px] 2xl:text-2xl">
        <div className="text-2xl lg:text-3xl  text-whiteCustom pl-3 w-full border-b-[2px] border-r-[2px] border-zinc-700  rounded-lg py-2 ">
          {title.toUpperCase()}
        </div>
        <div className="mt-2 flex justify-center items-center gap-2 lg:gap-3">
          <i className="bx bxs-map text-2xl text-zinc-700 lg:text-3xl 2xl:text-4xl"></i>
          {location}
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-3">
          <i className="bx bx-calendar text-2xl text-zinc-700 lg:text-3xl 2xl:text-4xl"></i>
          {time}
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-3">
          <i className="bx bxs-pen text-2xl text-zinc-700 lg:text-3xl 2xl:text-4xl"></i>
          {description}
        </div>
        <div className="text-sm md:text-base mt-2 text-zinc-600 max-w-[650px] 2xl:text-lg">{content}</div>
      </article>

      <i className='bx bxs-cube absolute bottom-2 right-1 text-4xl text-sky-700 xl:text-5xl 2xl:text-6xl'></i>
    </li>
  );
};

export default CardTournamentPage;

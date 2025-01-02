import { useAdminData } from "../Admin/AdminDataContext";
import CardTournamentPage from "./CardTournamentPage";
import iconNav from "/iconNav.png";

const Tournaments = () => {
  const { tournaments } = useAdminData();

  return (
    <section className="w-full min-h-screen bg-zinc-800 font-text2">
      <nav className="w-full flex justify-between items-center pt-1  px-4 lg:pt-2 lg:px-12">
        <figure className="w-10 ">
          <img src={iconNav} alt="icon-nav" className="w-full object-center" />
        </figure>
        <ul className="flex items-center gap-6 text-whiteCustom text-base lg:text-lg">
          <li className="border-l border-zinc-600 pl-2 lg:pl-3 ">Inicio</li>
          <li className="border-l border-zinc-600 pl-2 lg:pl-3">Noticias</li>
        </ul>
      </nav>
      <article className="mt-7 flex flex-col px-3 text-balance xl:pl-12">
        <h6 className="text-5xl font-title4 font-medium text-whiteCustom lg:text-6xl xl:text-7xl 2xl:text-8xl">TORNEOS</h6>
        <p className="mt-3 text-zinc-500 lg:text-lg lg:max-w-[700px] 2xl:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          quae, quibusdam labore itaque magnam totam iure minima harum repellat
          dolore. Officia tempore vero vitae distinctio labore excepturi culpa
          repudiandae voluptatibus?
        </p>
      </article>
      <ul className="mt-12 flex flex-col items-center gap-y-9 lg:gap-y-16 ">
        {tournaments?.map((tournament)=>(
          <CardTournamentPage  tournament={tournament}/>
        ))}
      </ul>
    </section>
  );
};

export default Tournaments;

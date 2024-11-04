import { useState } from "react";
import gsap from "gsap";
import bullet from "../assets/icons/bullet.png";
import blitz from "../assets/icons/blitz.png";
import rapido from "../assets/icons/rapido.png";
import pensado from "../assets/icons/pensado.png";

const Ritmos = () => {
  const icons = [
    {
      id: "BULLET",
      img: bullet,
      content: `Es el ritmo más rápido, con partidas que duran entre 1 y 2
      minutos por jugador. Me encanta este ritmo on-line ya que
      tengo que jugar con una velocidad extrema, siempre al límite
      del tiempo y me divierte. Usualmente participo de torneos
      on-line como el "Bullet Brawl" o "Titled Arena" donde puedo
      competir con jugadores de la Elite, y he tenido oportunidad de
      ganarle a muchos de ellos en este ritmo como a Magnus Carlsen.
      Me gusta mucho hacer streaming mientras juego este tipo de
      torneos y comentar.`,
    },
    {
      id: "BLITZ",
      img: blitz,
      content: `Este ritmo también es uno de mis favoritos, especialmente el 3 + 0 por jugador, sin incremento. Suelo participar en torneos blitz tanto presenciales como on-line. Aunque la velocidad sigue siendo crucial, hay más espacio para la táctica y la estrategia en comparación con el bullet.
  Suelo jugar on-line el "Titled Tuesday" o "Arena Kings" a este ritmo, donde también cada semana puedo jugar con ajedrecistas top y obtener muchas victorias, como con Hikaru Nakamura.
  Si son on-line, también me divierte mucho como en los torneos bullet, stremear mientras juego.`,
    },
    {
      id: "RÁPIDO",
      img: rapido,
      content: `En este formato, los jugadores disponen de entre 7 y 15 minutos por partida. En este ritmo me siento cómodo y suelo tener muy buenos resultados. Lo juego de manera presencial. Hay suficiente tiempo para pensar y calcular variantes, lo que permite un juego más estratégico sin la misma presión del reloj que en los anteriores.`,
    },
    {
      id: "PENSADO",
      img: pensado,
      content: `También llamado clásico, es el ritmo más lento, donde la calidad del juego es lo primordial, ya que los jugadores tienen tiempo para analizar posiciones con detalle y desarrollar planes a largo plazo. En mi caso particular, para mi lo ideal es jugar entre 80 y 100 partidas por año, ir ampliando el repertorio de aperturas y los finales; mi fuerte considero que es el medio juego (cálculo). Es el ritmo que te permite obtener las Normas y Títulos FIDE, como yo obtuve en junio 2024 el de Maestro Internacional.`,
    },
  ];

  const [selectedIcon, setSelectedIcon] = useState(icons[0]);

  const playAnimation = (newIcon) => {
    const content = document.getElementById("content-box");
    // Configura la animación de opacidad con GSAP
    gsap
      .timeline()
      .to(content, { opacity: 0, duration: 0.9 }) // Fase 1: Desaparece a 0
      .call(() => setSelectedIcon(newIcon)) // Cambia el contenido una vez que desaparece
      .to(content, { opacity: 1, duration: 0.6 }); // Fase 2: Vuelve a aparecer
  };

  return (
    <section
      id="ritmos_section"
      className="relative w-full h-screen overflow-visible bg-zinc-800 px-3 flex flex-col items-center justify-start pt-[15%] lg:flex-row lg:items-start lg:justify-center lg:pt-[7%] lg:gap-4 xl:gap-12"
    >
      <section className="z-50 w-full flex flex-col gap-4 items-center justify-center lg:mt-0 lg:w-1/2 lg:items-end xl:gap-5">
        <figure
          id="box-glass"
          className="z-50 relative w-full min-h-[150px] border-[2px] border-r-0 border-zinc-500  rounded-2xl rounded-tl-none rounded-tr-lg rounded-br-3xl max-w-[450px] xl:max-w-[580px] xl:min-h-[200px]"
        >
          <p className="text-4xl font-bold font-title text-white absolute top-0 left-0 mt-3 ml-2 xl:text-5xl xl:ml-4 sm:px-3 text-balance">
            ¿QUÉ PIENSO DE CADA RITMO?
            <div className="flex items-center mt-3 xl:mt-5">
              <span className="w-[80%] h-[2.5px] bg-zinc-500  "></span>
              <i className="bx bx-right-arrow-alt text-3xl -ml-[8px] -mt-[1px] text-zinc-500 xl:mt-0"></i>
            </div>
          </p>
        </figure>
        <div
          id="box-news"
          className="flex justify-center gap-2 xl:gap-3 w-full max-w-[450px] xl:max-w-[580px]"
        >
          <section className="w-full flex flex-col justify-center items-center gap-3 z-50 xl:gap-3">
            {icons?.map((icon, i) => (
              <div
                key={i}
                onClick={() => playAnimation(icon)}
                className={`cursor-pointer relative w-full flex items-center justify-start gap-4 pl-2 h-[50px] hover:scale-105 duration-500 rounded-2xl rounded-tl-none rounded-tr-sm rounded-br-3xl border-[2px] border-zinc-500 bg-gradient-to-br from-bluefausti via-zinc-800 to-transparent xl:h-[65px] shadow-sm shadow-zinc-900 ${selectedIcon?.id === icon?.id ? "border-zinc-200" : ""}`}
              >
                <figure className="w-[45px] flex justify-center items-center xl:w-[50px]">
                  <img
                    src={icon.img}
                    alt="icon"
                    className="object-cover w-full"
                  />
                </figure>
                <p className="font-title text-white font-medium text-xl xl:text-2xl ">
                  {icon.id}
                </p>
                <span className="rounded-full h-[35px] w-[35px] absolute bottom-1 right-2 flex justify-center items-center border border-white bg-bluefausti">
                  <i className="bx bx-arrow-back rotate-[145deg] text-white text-3xl"></i>
                </span>
              </div>
            ))}
          </section>
        </div>
      </section>
      <div className="flex justify-center items-center gap-2 w-full font-text2 xl:gap-3 lg:w-1/2 lg:justify-start lg:mt-6 z-50">
        <article
          id="content-box"
          className="w-full py-3 px-3 mt-3 rounded-2xl rounded-tl-none rounded-br-3xl border-[2px] border-r-0 border-stone-500 text-balance hover:scale-105 duration-500 bg-gradient-to-br from-bluefausti via-zinc-800 to-transparent max-w-[450px] z-50 lg:mt-0 lg:h-full xl:max-w-[500px] xl:py-8 xl:px-6 shadow-sm shadow-zinc-900"
        >
          <h6 className="text-zinc-100 font-title text-3xl font-semibold xl:text-4xl">
            {selectedIcon.id}
          </h6>
          <p className="text-stone-400 relative w-full text-balance text-base mt-4 xl:text-xl xl:mt-3">
            {selectedIcon.content}
          </p>
        </article>
      </div>
    </section>
  );
};

export default Ritmos;

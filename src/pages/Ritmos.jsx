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

  return (
    <>
      <section
        id="ritmos_section"
        className="relative w-full h-screen overflow-hidden bg-zinc-800  px-3 flex flex-col items-center justify-center"
      >
        <figure
          id="box-glass"
          className="z-50 relative w-full min-h-[150px] border-[2px] border-zinc-500 rounded-xl "
        >
          <p
            className="text-4xl font-bold font-title text-white  absolute top-0 left-0
          mt-3 ml-2 xl:text-3xl xl:ml-4 sm:px-3 text-balance"
          >
            ¿QUÉ PIENSO DE CADA RITMO?
            <div className="flex items-center mt-3">
              <span className="w-[80%] h-[2.5px] bg-zinc-500 -mt-[1px]"></span>
              <i class="bx bx-right-arrow-alt text-3xl -ml-[8px] text-zinc-500"></i>
            </div>
          </p>
        </figure>

        <section className="z-50 mt-3">
          <div id="box-news" className="flex justify-center gap-2 xl:gap-3 ">
            <section className="w-[100%] flex flex-col justify-center items-center gap-2 z-50">
              {icons?.map((icon, i) => (
                <div
                  key={i}
                  className="relative w-full flex items-center justify-start gap-4 pl-2 h-[50px] hover:scale-105 duration-500 rounded-2xl rounded-tl-none rounded-br-3xl border-[2px]  border-zinc-500 bg-gradient-to-br from-bluefausti via-zinc-800 to-transparent"
                >
                  <figure className="w-[45px] flex justify-center items-center">
                    <img
                      src={icon?.img}
                      alt="icon"
                      className="object-cover w-full"
                    />
                  </figure>
                  <p className="font-title text-white font-medium text-xl">
                    {icon?.id}
                  </p>
                  <span className=" rounded-full h-[35px] w-[35px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-bluefausti">
                    <i class="bx bx-arrow-back rotate-[145deg]  text-white  text-3xl"></i>
                  </span>
                </div>
              ))}
            </section>
          </div>

          <div className="flex justify-center items-center gap-2 w-full font-text2 xl:gap-3">
            <article className="w-full py-3 px-3 mt-3 rounded-2xl rounded-tl-none rounded-br-3xl border-[2px] border-stone-400  text-balance  hover:scale-105 duration-500 bg-gradient-to-br from-bluefausti via-zinc-800 to-transparent z-50">
              <h6 className="text-zinc-100 font-title text-3xl font-semibold">
                BULLET
              </h6>
              <p className="text-stone-400 relative w-full text-base  mt-2">
                Es el ritmo más rápido, con partidas que duran entre 1 y 2
                minutos por jugador. Me encanta este ritmo on-line ya que tengo
                que jugar con una velocidad extrema, siempre al límite del
                tiempo y me divierte. Usualmente participo de torneos on-line
                como el "Bullet Brawl" o "Titled Arena" donde puedo competir con
                jugadores de la Elite, y he tenido oportunidad de ganarle a
                muchos de ellos en este ritmo como a Magnus Carlsen. Me gusta
                mucho hacer streaming mientras juego este tipo de torneos y
                comentar.
              </p>
            </article>
          </div>
        </section>
        <div
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-bluefausti absolute z-10  inset-0"
        ></div>
      </section>
    </>
  );
};

export default Ritmos;

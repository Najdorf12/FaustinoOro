import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <section className="pattern w-full h-screen pt-16 flex flex-col items-center xl:pt-32 2xl:pt-40">
        <div className="text-stone-400 text-4xl font-title font-semibold  flex flex-col items-center justify-center gap-6 text-center px-3 text-balance max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1000px]  xl:text-5xl 2xl:text-6xl 2xl:gap-12">
          ¡UPS ...!
          <p className="">NO HAY CURSOS DISPONIBLES EN ESTE MOMENTO</p>
        </div>
        <Link to={"/"}>
          <button className="px-4 py-1 mt-12 rounded-3xl border border-white flex justify-center items-center text-white font-text2 text-lg xl:text-xl 2xl:text-2xl 2xl:mt-24 ">
            Volver al Inicio
          </button>
        </Link>
      </section>
    </>
  );
};

export default Courses;

import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <>
    <section className="bg-whiteCustom w-full h-screen pt-16 flex flex-col items-center xl:pt-32 2xl:pt-40">
    <div className="text-zinc-600 text-4xl font-title font-semibold flex flex-col items-center justify-center gap-6 text-center px-3 text-balance max-w-[700px] xl:max-w-[900px]  xl:text-5xl 2xl:max-w-[1000px] 2xl:text-6xl 2xl:gap-9">
      ¡UPS ...!
      <p className="">NO SE HA ENCONTRADO LA RUTA A LA QUE QUIERES INGRESAR</p>
    </div>
    <Link to={"/"}>
      <button className="animated-button rounded-3xl w-[190px] mt-6 pl-9 py-1 shadow-lg shadow-zinc-900 border border-zinc-600 lg:w-[200px] lg:mt-8 2xl:w-[230px] group">
        <i className="bx bx-right-arrow-alt arr-2 text-3xl  text-sky-600 2xl:text-4xl"></i>
        <span className="text font-title2 text-base 2xl:text-lg text-zinc-700 group-hover:text-whiteCustom">
          Volver al Inicio
        </span>
        <span className="circle bg-zinc-700"></span>
        <i className="bx bx-right-arrow-alt arr-1 text-3xl text-sky-600 2xl:text-4xl"></i>
      </button>
    </Link>
  </section>
  <Footer />
  </>
  )
}

export default ErrorPage
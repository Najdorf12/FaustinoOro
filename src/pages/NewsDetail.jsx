import { Link } from "react-router-dom";
import imgFausti from "../assets/fausti3.jpg";
import Footer from "../components/Footer";

const NewsDetail = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-zinc-800 pb-20 flex flex-col xl:flex-row-reverse xl:justify-center xl:items-center xl:gap-[3%] overflow-hidden">
        <div
          style={{
            clipPath: "polygon(50% 0%, 100% 0, 20% 18%, 0 100%, 0 0)",
          }}
          className="absolute bg-bluefausti inset-0 "
        ></div>
        <nav className="w-full absolute top-0 right-0  flex justify-end pr-4 pt-4  xl:pr-12 xl:pt-6">
          <div className="flex items-center gap-5  text-stone-400  xl:gap-6">
            <Link to={"/"}>
              <button className="border-l-[2px] border-white text-white cursor-pointer flex items-center justify-between pl-3 w-[90px] ">
                Inicio
                <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-lightbrown text-xl "></i>
              </button>
            </Link>
            <Link to={"/"}>
              <button className="border-l-[2px] border-white text-white cursor-pointer flex items-center justify-between pl-3 w-[100px] ">
                Noticias
                <i className="bx bx-arrow-back rotate-[145deg] flex justify-center items-center text-lightbrown text-xl "></i>
              </button>
            </Link>
          </div>
        </nav>

        <div className="w-full  self-center  xl:w-auto mt-20  z-20 rounded-3xl px-3">
          <picture className="max-w-[350px]">
            <img
              src={imgFausti}
              className="rounded-2xl shadow-xl shadow-zinc-900 w-full max-w-[650px] 2xl:max-w-[800px]"
              alt="imgFausti"
            />
          </picture>
        </div>

        <section
          id=""
          className="text-balance w-full font-text2 relative mt-8 self-end  flex flex-col justify-center items-center gap-3 px-3 overflow-y-visible max-w-[650px] md:mt-12 text-end  xl:self-center xl:text-start 2xl:max-w-[750px]"
        >
          <h6 className="text-white  relative font-title font-semibold z-50 text-3xl xl:text-5xl 2xl:text-6xl">
            Faustino consigue otro hito histórico
            <div className="w-[90%] h-[1.5px] max-w-[600px] absolute right-0 -bottom-3 bg-white z-50 xl:-bottom-6  xl:left-0 xl:w-[100%] xl:max-w-[750px]"></div>
          </h6>
          <p className="text-lg pl-3  leading-5  mt-4 text-stone-300 xl:text-xl xl:mt-6 xl:pl-0 2xl:text-xl 2xl:mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
            consequatur nobis fuga aut reprehenderit ratione.
          </p>

          <p className="  mt-2 pl-4  lg:pr-0 text-sm  md:text-base text-stone-400 font-title xl:pl-0 2xl:mt-3 z-50 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            asperiores ut magni, porro possimus temporibus debitis tempore ex
            expedita provident corrupti rerum minus minima quaerat ducimus. Eos
            itaque exercitationem dolorum. Soluta voluptas alias eos vel, et
            sapiente beatae quidem, perspiciatis porro, quam id sequi. Illum
            corrupti omnis tempore quas repellat corporis, inventore magni ipsam
            deserunt eligendi aperiam numquam neque temporibus! Officiis atque
            quo reprehenderit enim doloribus. Fuga amet incidunt blanditiis
            cupiditate, possimus minima optio molestias at maxime error
            doloremque officia ipsa obcaecati expedita perferendis tempore. Esse
            fugiat error laudantium natus!
          </p>
        </section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default NewsDetail;

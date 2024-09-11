import { Link } from "react-router-dom";
import imgFausti from "../assets/fausti3.jpg";

const NewsDetail = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-stone-500 pb-20 flex flex-col xl:flex-row-reverse xl:justify-center xl:items-center xl:gap-[3%]">
        <nav className="w-full absolute top-0 right-0  flex justify-end pr-4 pt-2  xl:pr-12 xl:pt-6">
          <ul className="flex items-center gap-4 text-stone-300 xl:gap-6">
            <Link to={"/"}>
              <li className="rounded-full border border-stone-400 px-7 py-[1px] xl:px-8 2xl:py-[2.5px] 2xl:px-10 flex justify-center items-center hover:scale-110 hover:border-stone-800 duration-500">
                Inicio
              </li>
            </Link>
            <Link to={"/news"}>
              <li className="rounded-full border border-stone-400 px-6 py-[1px] xl:px-8 2xl:py-[2.5px] 2xl:px-10 flex justify-center items-center hover:scale-110 hover:border-stone-800 duration-500">
                Noticias
              </li>
            </Link>
          </ul>
        </nav> 

        <div className="w-full xl:w-auto mt-20    rounded-3xl shadow-xl shadow-zinc-800">
          <picture className="max-w-[350px] ">
            <img
              src={imgFausti}
              className="rounded-2xl  w-full max-w-[700px] 2xl:max-w-[800px]"
              alt="imgFausti"
            />
          </picture>
        </div>

        <section
          id="contact_section"
          className="text-balance w-full font-text2 relative mt-6  flex flex-col justify-center items-center gap-3 px-3 overflow-y-visible max-w-[650px] md:mt-12"
        >
          <h6 className="text-white relative font-title font-semibold z-50 text-3xl xl:text-4xl 2xl:text-5xl">
            FAUSTINO CONSIGUE OTRO HITO HISTORICO
            <div
              id="line-contact"
              className="w-[90%] h-[1.5px] absolute -bottom-3 bg-white z-50"
            ></div>
          </h6>
          <p className="text-lg  text-start mt-3 text-stone-700 xl:text-xl 2xl:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
            consequatur nobis fuga aut reprehenderit ratione.
          </p>

          <p className="  mt-3   lg:pr-0 text-sm  md:text-base text-stone-300 font-title xl:mt- 2xl:mt-2 z-50 ">
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
      </section>
    </>
  );
};

export default NewsDetail;

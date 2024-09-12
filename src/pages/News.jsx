import imgNews from "../assets/news/imgNews4.jpg";
import imgNews4 from "../assets/news/imgNews2.jpg";
import imgNews2 from "../assets/news/imgNews.jpg";
import imgNews3 from "../assets/news/imgNews3.jpg";
import { Link } from "react-router-dom";
import CardNotice from "../components/CardNotice";

const News = () => {
  const windWidth = window.innerWidth
  return (
    <main className="bg-gray-300 w-full min-h-screen pt-20 relative flex flex-col items-center xl:pt-20 overflow-hidden">
      <div
        style={{
          clipPath: windWidth > 700 ? 
          "polygon(0 0, 100% 0, 16% 16%, 0 69%)"
          :
           "polygon(0 0, 100% 0, 44% 7%, 0 33%)"
        }}
        className="absolute bg-zinc-800 inset-0 z-20"
      ></div>
      <nav className="w-full absolute top-0 right-0 z-50 flex justify-end pr-4 pt-2  xl:pr-12 xl:pt-6">
        <ul className="flex items-center gap-4 text-stone-400 xl:gap-6">
          <Link to={"/"}>
            <li className="rounded-full border border-stone-400 bg-zinc-700 px-7 py-[1px] xl:px-8 2xl:py-[2.5px] 2xl:px-12 flex justify-center items-center hover:scale-110 hover:text-white duration-500 text-base 2xl:text-xl">
              Inicio
            </li>
          </Link>
        </ul>
      </nav>

      <h3
        id="news-box"
        className="w-[75%] md:w-[50%] xl:w-[35%] self-start rounded-r-2xl  max-w-[] flex justify-center items-center  font-title text-5xl text-white font-semibold  lg:text-6xl  2xl:text-7xl px-12 xl:px-14 2xl:px-16 py-3 border-[1px]  border-lightbrown lg:justify-start z-50"
      >
        NOTICIAS
      </h3>

      <section className="relative w-full flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[6%] 2xl:gap-[10%] 2xl:justify-center  mt-4 xl:mt-6 2xl:mt-12 z-50">
        <section className="mt-3 flex flex-col justify-center gap-2  pt-8 px-2 max-w-[600px] xl:max-w-[600px] xl:gap-4 2xl:max-w-[700px] ">
          <article
            id="box-news"
            className="pattern relative flex flex-col items-center rounded-2xl  border border-lightbrown h-[300px] lg:h-[350px] text-balance px-3 hover:scale-105 duration-500"
          >
            <p className=" w-full  font-semibold font-text2 text-white text-center pt-3  text-3xl xl:text-5xl max-w-[400px] xl:pt-6  ">
              LOREM IMSUM DOLOR SIT AMET
            </p>
            <p className=" mt-3 max-w-[400px] text-center text-stone-300 xl:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi,
              ipsa numquam veritatis ipsam aperiam, nesciunt optio voluptates
              est mollitia temporibus rem minima incidunt omnis commodi sed
              fugiat accusamus quod!
            </p>
          </article>
          <div className=" flex justify-center items-center gap-2 w-full font-text2 xl:gap-3">
            <div className="pattern text-stone-400 bg-zinc-800 relative w-1/2 text-base  sm:text-lg h-[150px] rounded-2xl rounded-tl-none rounded-br-3xl border border-lightbrown p-2 hover:scale-105 duration-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              maxime!
              <span className="rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
              </span>
            </div>
            <div className="w-1/2  h-[150px] rounded-2xl border border-white ">
              <picture className="w-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={imgNews2}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </section>

        {/*   <h5 className="mt-6 text-stone-300 text-3xl font-semibold font-text2 lg:hidden">
          LOREM IMPSUM
        </h5> */}

        <section className="mt-3 flex flex-col justify-center gap-2  pt-8 px-2 max-w-[600px] xl:max-w-[600px] 2xl:max-w-[700px] xl:gap-4">
          <article
            id="box-news"
            className="flex justify-center gap-2 xl:gap-3 "
          >
            <picture className="relative w-[60%] ">
              <img
                className="w-full object-cover h-[300px] rounded-2xl rounded-br-none border border-stone-500 lg:h-[350px]"
                src={imgNews}
                alt=""
              />
              <div
                className="text-xl font-bold font-title text-bluefausti box-new absolute top-0 left-0
          mt-3 ml-2 xl:text-3xl xl:ml-4 
          "
              >
                LOREM <br /> IMPSUM <br /> DOLOR <br /> SIT <br /> AMET
              </div>
            </picture>
            <div className="text-lightbrown text-balance relative w-[40%] text-2xl font-semibold font-title  rounded-2xl rounded-tl-none rounded-br-3xl border bg-zinc-800 border-lightbrown p-2 xl:text-3xl 2xl:text-4xl hover:scale-105 duration-500 ">
              LOREM IMSUM DOLOR SIT AMET CONSECT ADIPSICING ELIT
              {/* <span className=" rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
              </span> */}
            </div>
          </article>
          <div className="flex justify-center items-center gap-2 w-full font-text2 xl:gap-3">
            <div className="w-1/2  h-[150px] rounded-2xl border border-white ">
              <picture className="w-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={imgNews4}
                  alt=""
                />
              </picture>
            </div>
            <div className="text-stone-500 relative w-1/2  h-[150px] rounded-2xl rounded-tl-none rounded-br-3xl border border-lightbrown p-2 text-base  sm:text-lg hover:scale-105 duration-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              maxime!
              <span className=" rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
              </span>
            </div>
          </div>
        </section>
      </section>

      <article className="w-full flex flex-col justify-center items-center z-50">
        <div
          /* id={windWidth > 700 ?  "news-box" : ""} */
          className="bg-bluefausti  py-6 2xl:py-12 w-[90%] max-w-[900px] rounded-r-2xl mt-10 xl:mt-12 flex flex-col items-start  px-3 self-start lg:pl-[9%]"
        >
          <h6 className="text-3xl font-text2 text-white text-balance max-w-[370px] lg:max-w-[500px] lg:text-5xl  text-start 2xl:text-6xl 2xl:max-w-[600px]">
            Lorem impsum dolor sit amet consectetur
          </h6>
          <p className="font-text2 text-balance mt-3 text-stone-400  max-w-[350px] lg:max-w-[500px] xl:mt-6 xl:text-lg text-start 2xl:text-xl 2xl:max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            numquam non, soluta quibusdam magni facilis officia culpa nemo
            molestias veritatis ut porro quos aperiam ipsum eos eum accusamus
            sed placeat? Corporis, rerum commodi tempora iste, eligendi
            doloremque provident debitis nam praesentium reprehenderit vero
            voluptatem! Ipsam eius amet non corrupti.
          </p>
        </div>
      </article>

      <section className="z-50 w-full flex flex-col justify-start pt-12 pb-20 items-center px-3 mt-20 bg-zinc-800 min-h-screen xl:items-start 2xl:mt-28 xl:pt-20">
        <div className="w-full text-center text-balance flex flex-col gap-3 xl:gap-6">
          <h3 className="text-4xl font-text2 text-white lg:text-6xl 2xl:text-7xl">
            LOREM IMPSUM
          </h3>
          <p className="text-stone-500 text-lg w-[320px] md:w-auto md:max-w-[450px] self-center lg:text-xl 2xl:text-2xl 2xl:mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eligendi molestias.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center items-center w-full xl:mt-20 xl:gap-6 2xl:gap-8 ">
          <CardNotice />
          <CardNotice />
          <CardNotice />
          <CardNotice />
        </div>
      </section>
      {/* <section className="w-full h-[50vh] flex justify-center ">
          <Slider />
      </section> */}
    </main>
  );
};
export default News;

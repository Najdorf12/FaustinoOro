import imgNews from "../assets/news/imgNews4.jpg";
import imgNews4 from "../assets/news/imgNews2.jpg";
import imgNews2 from "../assets/news/imgNews.jpg";
import imgNews3 from "../assets/news/imgNews3.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <main className="pattern w-full min-h-screen pb-24 pt-14 relative flex flex-col items-center xl:pt-20">
      <Link to={"/"}>
        <button className="absolute top-0 right-0 mt-2 mr-3 px-6 py-[2px] rounded-3xl border border-lightbrown  flex justify-center items-center text-white  font-text2 text-lg xl:px-8 xl:mt-3 xl:mr-6 xl:text-xl 2xl:text-2xl  hover:scale-105 hover:text-stone-500 hover:bg-white duration-500">
          Volver
        </button>
      </Link>
      <h3 className="w-[100%]  max-w-[] flex justify-center items-center bg-white  font-title text-5xl text-lightbrown font-semibold  lg:text-6xl  2xl:text-7xl px-12 xl:px-14 2xl:px-16 py-3 border-[1px]  border-lightbrown lg:justify-start z-50">
        NOTICIAS
      </h3>

      <section className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:px-[5%] mt-2 xl:mt-6 2xl:mt-12">
        <section className="flex flex-col justify-center gap-2  pt-8 px-2 max-w-[600px] xl:max-w-[600px] 2xl:max-w-[700px] ">
          <article
            id="box-news"
            className="relative flex flex-col items-center rounded-2xl  rounded-br-none border border-stone-500 h-[300px] lg:h-[350px] text-balance px-3"
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
          <div className="flex justify-center items-center gap-2 w-full font-text2">
            <div className="text-stone-400 bg-zinc-800 relative w-1/2 text-base  sm:text-lg h-[150px] rounded-2xl rounded-tl-none rounded-br-3xl border border-lightbrown p-2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              maxime!
              <span className=" rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
              </span>
            </div>
            <div className="w-1/2  h-[150px] rounded-2xl border border-white">
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

        <section className="mt-3 flex flex-col justify-center gap-2  pt-8 px-2 max-w-[600px] xl:max-w-[600px] 2xl:max-w-[700px] ">
          <article id="box-news" className="flex justify-center gap-2 ">
            <picture className="relative w-[60%]">
              <img
                className="w-full object-cover h-[300px] rounded-2xl rounded-br-none border border-stone-500 lg:h-[350px]"
                src={imgNews}
                alt=""
              />
              <div
                className="text-xl font-bold font-title text-stone-500 box-new  absolute top-0 left-0
          mt-3 ml-2 xl:text-3xl xl:ml-4 
          "
              >
                LOREM <br /> IMPSUM <br /> DOLOR <br /> SIT <br /> AMET
              </div>
            </picture>
            <div className="text-lightbrown text-balance relative w-[40%] text-2xl font-semibold font-title  rounded-2xl rounded-tl-none rounded-br-3xl border bg-zinc-800 border-lightbrown p-2 xl:text-3xl 2xl:text-4xl">
              LOREM IMSUM DOLOR SIT AMET CONSECT ADIPSICING ELIT
              {/* <span className=" rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
              </span> */}
            </div>
          </article>
          <div className="flex justify-center items-center gap-2 w-full font-text2">
            <div className="w-1/2  h-[150px] rounded-2xl border border-white">
              <picture className="w-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={imgNews4}
                  alt=""
                />
              </picture>
            </div>
            <div className="text-stone-400 relative w-1/2  h-[150px] rounded-2xl rounded-tl-none rounded-br-3xl border border-lightbrown p-2 text-base  sm:text-lg ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              maxime!
              <span className=" rounded-full h-[40px] w-[40px] absolute bottom-0 right-0 flex justify-center items-center border border-white bg-stone-600">
                <i class="bx bx-arrow-back rotate-[145deg]  text-lightbrown  text-3xl"></i>
              </span>
            </div>
          </div>
        </section>
      </section>
   
    </main>
  );
};
export default News;

import imgNews from "../assets/imgNews.jpg";
import imgFausti from "../assets/fausti20.jpeg";

const Ritmos = () => {
  return (
    <>
      <section
        id="ritmos_section"
        className="relative w-full h-screen overflow-hidden bg-zinc-800  flex  items-end"
      >
        <div
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
          id="box-stats_wrapper"
          className="w-full h-screen bg-zinc-300 absolute  inset-0"
        ></div>

        <div className="absolute top-0 right-0  z-50 rounded-xl lg:left-0 md:flex md:flex-col md:justify-center md:items-center xl:items-start xl:pl-[3%]">
          <section className="mt-16 flex flex-col justify-center gap-2  pt-8 px-2 max-w-[600px] lg:mt-4 2xl:max-w-[700px] xl:gap-4 xl:mt-6 2xl:mt-8">
            <article
              id="box-news"
              className="flex justify-center gap-2 xl:gap-3 "
            >
              <section
                id="news-box"
                className="relative w-[60%]  border border-stone-500 rounded-2xl"
              >
                <div
                  className="text-xl font-bold font-title text-stone-600 box-new absolute top-0 left-0
          mt-3 ml-2 xl:text-3xl xl:ml-4 
          "
                >
                  LOREM IMPSUM DOLOR SIT AMET
                  <div className="flex items-center">
                    <div className="w-[50%] h-[2.5px] bg-white -mt-[1px]"></div>
                    <i class="bx bx-right-arrow-alt text-3xl -ml-[8px] text-white"></i>
                  </div>
                </div>
              </section>
              <div className="text-white text-balance relative w-[40%]  text-2xl font-semibold font-title    xl:text-3xl 2xl:text-4xl hover:scale-105 duration-500 ">
                <figure className="">
                  <img
                    className="w-full  object-cover rounded-2xl rounded-tl-none rounded-br-3xl border  border-lightbrown h-[180px] xl:h-[220px] 2xl:h-[240px]"
                    src={imgNews}
                    alt=""
                  />
                </figure>
              </div>
            </article>
            <div className="flex justify-center items-center gap-2 w-full font-text2 xl:gap-3">
              <div className="w-1/2  h-[150px]  ">
                <figure className="w-full h-full">
                  <img
                    className="w-full h-full object-cover  rounded-tl-sm rounded-r-2xl border border-lightbrown"
                    src={imgFausti}
                    alt=""
                  />
                </figure>
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
        </div>
       {/*  <p className="absolute bottom-24 right-0  w-[65%] text-lg flex justify-center items-center text-balance px-3 text-end  text-white md:max-w-[500px] lg:mr-[5%] 2xl:bottom-[20%] xl:text-2xl 2xl:text-3xl z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
          accusamus aliquam nesciunt dolores illum quos, mollitia aliquid et
          quasi.
        </p> */}
      </section>
    </>
  );
};

export default Ritmos;

import imgNews from "../assets/news/imgNews2.jpg";
import imgNews2 from "../assets/news/imgNews.jpg";

const News = () => {
  return (
    <main className="pattern w-full h-screen pt-6">
      <h6 className="text-start pl-[4%] text-stone-500 text-5xl font-title font-semibold 2xl:text-8xl ">
        NOTICIAS
      </h6>

      <section className="flex flex-col justify-center gap-2  pt-8 px-2 max-w-[500px]">
        <article
          id="box-news"
          className=" relative flex flex-col justify-center items-center "
        >
          <div
            className="text-xl font-bold font-title text-stone-600 box-new  absolute top-0
          mt-3
          "
          >
            LOREM IMPSUM
          </div>
          <picture className="w-full">
            <img
              className="w-full object-cover h-[300px] rounded-2xl rounded-br-none border border-stone-500"
              src={imgNews}
              alt=""
            />
          </picture>
        </article>
        <div className="flex justify-center items-center gap-2 w-full font-text2">
          <div className="text-stone-400 relative w-1/2  h-[150px] rounded-2xl rounded-tl-none rounded-br-3xl border border-lightbrown p-2 ">
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
    </main>
  );
};
export default News;

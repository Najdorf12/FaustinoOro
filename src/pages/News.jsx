import imgNews from "../assets/news/imgNews2.jpg";

const News = () => {
  return (
    <section className="pattern w-full h-screen">
      <section className="flex flex-col justify-center gap-6 bg-red-600 pt-8 px-2">
        <div className="text-center text-stone-500 text-4xl font-title font-semibold 2xl:text-8xl bg-purple-600">
          NOTICIAS
        </div>

        <article
          id="box-news"
          className="bg-teal-600 relative flex flex-col justify-center items-center "
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
              className="w-full object-cover rounded-2xl h-[300px]"
              src={imgNews}
              alt=""
            />
          </picture>
        </article>
        <div className="flex justify-center items-center gap-2 w-full">
          <div className="w-1/2 bg-rose-700 h-[100px] rounded-2xl border border-lightbrown"></div>
          <div className="w-1/2 bg-rose-300 h-[100px]"></div>
        </div>
      </section>
    </section>
  );
};
export default News;

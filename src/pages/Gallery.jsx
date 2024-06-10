import imgFausti2 from "../assets/fausti2.jpg";
import imgFausti3 from "../assets/fausti3.jpg";
import imgFausti4 from "../assets/fausti4.jpg";
import imgFausti6 from "../assets/img6.jpg";
import imgFausti7 from "../assets/img16.jpg";
import imgFausti8 from "../assets/img18.jpg";
import imgFausti9 from "../assets/img17.jpg";

const Gallery = () => {
  return (
    <>
      <section
        id="third_section"
        className="w-full h-screen bg-zinc-900  font-title text-white z-50"
      >
        <article className="pt-2 px-3 flex flex-col gap-3 z-50 sm:max-w-[500px] lg:max-w-[670px]  lg:ml-16 xl:ml-32 2xl:max-w-[1100px]">
          <h3 className="text-5xl z-50 font-medium lg:text-6xl 2xl:text-8xl">
            LOREM IPSUM DOLOR SIT AMET CONSECT ADIPSICING ELIT.
          </h3>
        </article>
      </section>

      <section
        id="four_section"
        className="w-full h-screen bg-zinc-900 overflow-hidden px-1 sm:px-4 md:px-6"
      >
        <div className="grid grid-cols-5 grid-rows-4 gap-1  h-screen opacity-80  sm:max-w-[700px]  md:gap-2 lg:gap-4 lg:h-[90%] lg:max-w-[800px] xl:max-w-[850px]  2xl:max-w-[55%] 2xl:ml-10 ">
          <div className="col-span-3  row-span-3 ">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={imgFausti4}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={imgFausti2}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-3">
            <img
              className="w-full h-full rounded-lg object-cover "
              src={imgFausti9}
              alt=""
            />
          </div>
          <div className="col-span-3 row-start-4  flex justify-center items-center">
            <p className="font-title2 pl-2 sm:pl-4 text-5xl font-semibold 2xl:text-6xl text-stone-700">
              LOREM IMPSUM
            </p>
          </div>
          <div className="col-span-2 row-start-5">
            <img
              className="w-full h-full rounded-lg object-cover "
              src={imgFausti6}
              alt=""
            />
          </div>
          <div className="col-span-3 col-start-3 row-start-5 ">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={imgFausti3}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;

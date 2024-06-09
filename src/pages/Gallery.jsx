import imgFausti2 from "../assets/fausti2.jpg";
import imgFausti3 from "../assets/fausti3.jpg";
import imgFausti4 from "../assets/fausti4.jpg";
import imgFausti5 from "../assets/fausti5.jpg";

const Gallery = () => {
  return (
    <>
      <section
        id="third_section"
        className="w-full h-screen bg-zinc-900  font-title text-white z-50"
      >
        <article className="pt-2 px-3 flex flex-col gap-3 z-50 sm:max-w-[500px] lg:max-w-[670px]  lg:ml-16 xl:ml-32 2xl:max-w-[1100px]">
          <h3 className="text-4xl z-50 font-medium lg:text-6xl 2xl:text-8xl">
            LOREM IPSUM DOLOR SIT AMET CONSECT ADIPSICING ELIT.
          </h3>
        </article>
      </section>

      <section id="four_section" className="w-full h-screen bg-zinc-900 overflow-hidden px-1 sm:px-4 md:px-6">
        <div className="grid grid-cols-5 grid-rows-5 gap-2 md:gap-4 lg:gap-5 lg:ml-12 sm:max-w-[700px]  2xl:max-w-[900px] 2xl:ml-24 xl:max-h-[70%] opacity-75 ">
          <div className="col-span-3 row-span-3 ">
            <img
              src={imgFausti2}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-4 ">
            <img
              src={imgFausti3}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-4 row-start-1 ">
            <img
              src={imgFausti4}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="col-span-3 row-span-2 col-start-3 row-start-4 ">
            <img
              src={imgFausti5}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;

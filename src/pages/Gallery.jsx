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
        <article className="pt-2 px-3 flex flex-col gap-3 z-50 sm:max-w-[500px] lg:max-w-[670px]  lg:ml-16 xl:ml-32 2xl:max-w-[900px]">
          <h3 className="font-title font-bold text-5xl md:text-6xl z-50 lg:text-6xl 2xl:text-[6.2rem] ">
            LOREM IPSUM DOLOR SIT AMET CONSECT <span /* style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px ",
            }}  */className="text-rose-800"> DOLOR SIT AMET. </span> 
          </h3>
        </article>
      </section>

      <section
        id="four_section"
        className="w-full h-screen bg-zinc-900 overflow-hidden px-1 sm:px-4 md:px-6"
      >
        <div className="z-10 grid grid-cols-5 grid-rows-4 gap-1  h-screen  sm:max-w-[700px]  md:gap-2 lg:gap-4 lg:h-[100%] lg:max-w-[700px] xl:max-w-[750px]  2xl:max-w-[55%] xl:ml-12  2xl:ml-10 ">
          <div className="relative col-span-3  row-span-3 ">
            <img
              loading="lazy"
              className="w-full h-full rounded-lg object-cover opacity-70 "
              src={imgFausti4}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4">
            <img
              loading="lazy"
              className="w-full h-full rounded-lg object-cover opacity-70"
              src={imgFausti2}
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-3">
            <img
              loading="lazy"
              className="w-full h-full rounded-lg object-cover opacity-70"
              src={imgFausti9}
              alt=""
            />
          </div>
          <div className="col-span-3 row-start-4  flex justify-center items-center">
            <p className="font-title3  pl-2 sm:pl-4 text-4xl font-semibold  2xl:text-6xl text-stone-700">
              LOREM IMPSUM
            </p>
          </div>
          <div className="col-span-2 row-start-5">
            <img
              loading="lazy"
              className="w-full h-full rounded-lg object-cover opacity-70"
              src={imgFausti6}
              alt=""
            />
          </div>
          <div className="col-span-3 col-start-3 row-start-5 ">
            <img
              loading="lazy"
              className="w-full h-full rounded-lg object-cover opacity-70 z-10"
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

import imgFausti2 from "../assets/9.jpeg";
import imgFausti3 from "../assets/2.jpeg";
import imgFausti4 from "../assets/3.jpeg";
import imgFausti6 from "../assets/img6.jpg";
import imgFausti9 from "../assets/10.jpeg";

const Gallery = () => {
  return (
    <>
      <section
        id="third_section"
        className="pt-10 w-full h-[580px] xl:h-[90vh]  font-title relative flex items-start overflow-hidden xl:pt-[4%]  2xl:pt-0 2xl:justify-start 2xl:h-[85vh]"
      >
        <article className="h-full relative pt-2 pl-3 sm:px-2  gap-3 z-40 sm:max-w-[400px] md:max-w-[70%] sm:pl-6  md:ml-[3%] lg:ml-[4%]  2xl:pt-0  2xl:mt-16  text-balance">
          <h3 className="mt-1 font-title text-balance  max-w-[380px] text-stone-600 font-bold text-[3.7rem] leading-[1] z-50  md:max-w-[800px] md:text-[5rem] lg:text-[5.4rem] xl:text-[13.5vh] lg:max-w-[1100px]  2xl:max-w-[1200px] 2xl:text-[13vh]">
            EL ÉXITO OCURRE CUANDO
            <span className="text-white">TUS SUEÑOS SON MAS GRANDES </span> QUE
            TUS EXCUSAS.
          </h3>
        </article>
      </section>

      <section
        id="four_section"
        className="w-full flex justify-center items-start  h-[90dvh]  lg:justify-start lg:pl-[5%] lg:h-screen z-50 md:z-10 overflow-y-visible relative px-1 lg:pb-9 xl:pb-12 "
      >
        <div className="grid grid-cols-6 grid-rows-8 gap-1 w-full h-[90%] lg:gap-2 lg:max-w-[60%] lg:h-full">
          <div className="col-span-2 row-span-3 ">
            <picture className=" ">
              <img
                className="w-full h-full rounded-3xl  object-cover border-[2px] border-stone-700 shadow-zinc-900 shadow-lg"
                src={imgFausti3}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-2 row-span-3 col-start-3 ">
            <picture className="">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-stone-700 shadow-zinc-900 shadow-lg"
                src={imgFausti9}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-2 row-span-6 col-start-5 ">
            <picture className="">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-stone-700 shadow-zinc-900 shadow-lg "
                src={imgFausti4}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-4 row-span-3 row-start-4  ">
            <picture className="">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-stone-700 shadow-zinc-900 shadow-lg md:object-[0px,-70px]"
                src={imgFausti2}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-6 row-span-2 row-start-7">
            <picture className=" ">
              <img
                className="w-full h-full rounded-3xl object-cover border-[2px] border-stone-700  shadow-zinc-900 shadow-lg"
                src={imgFausti6}
                alt=""
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;

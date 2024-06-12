const Home = () => {
  return (
    <>
      <section className=" w-full h-screen bg-[#e8e8e8] flex justify-center items-center z-50 ">
        <div
          className="w-[95%] rounded-[20px] h-[95%] relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex justify-end items-center "
          id="home"
        >
          <article className="flex flex-col justify-center items-center gap-3 text-center mt-[100%] sm:px-6 md:mt-[70%] lg:mt-[50%] xl:mt-[27%] xl:mr-[2%]">
            <h1 className="font-text2 text-6xl leading-[3.5rem] font-bold text-gray-200 md:text-7xl xl:text-[7rem] 2xl:text-[10rem] bg-clip-text text-transparent bg-gradient-to-b from-stone-500 to-white">
              FAUSTINO ORO
            </h1>
            <p className=" font-text2 text-2xl text-stone-600  md:text-3xl xl:text-4xl 2xl:text-5xl xl:-mt-3">
              LOREM IMPSUM
            </p>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute flex gap-2 top-0 right-0  w-[200px] h-[50px] bg-[#e8e8e8] border-[6px] border-[#e8e8e8]  rounded-tl-[20px] rounded-bl-[20px] md:w-[300px] md:h-[70px] 2xl:w-[380px] 2xl:h-[80px]">
           <button className="flex justify-center items-center rounded-2xl border border-stone-700 font-title  bg-zinc-800 text-white w-[90px]  text-lg py-1 px-6">
            Button
           </button>
           <button className="flex justify-center items-center rounded-2xl border border-stone-700 font-title  bg-zinc-800 text-white w-[90px]  text-lg py-1 px-6">
            Button
           </button>
          </span>
         
          <span className="bg-[#e8e8e8] absolute -bottom-1 -left-1 pl-1 pt-[2px] w-[200px] h-[75px]  border-[6px] border-[#e8e8e8]  rounded-tr-[20px] rounded-bl-[20px] md:w-[250px] md:h-[70px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[80px]">
            <p className="text-2xl font-title3 font-medium leading-5">LOREM IMSPSUM DOLOR SIT </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;

const Home = () => {
  return (
    <>
      <section className=" w-full h-screen bg-[#D6D9D7] flex justify-center items-center z-50 ">
        <div
          className="w-[95%] rounded-[20px] h-[95%] relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex justify-end items-center "
          id="home"
        >
          <article className="flex flex-col justify-center items-center gap-3 text-center  mt-60 sm:px-6 md:mr-12 2xl:mr-24 2xl:mt-96">
            <h1 className="font-title2 text-6xl leading-[3.5rem] font-bold text-gray-200 md:text-7xl 2xl:text-[7.5rem]">FAUSTINO ORO</h1>
            <p className=" font-title2 text-2xl text-stone-400  md:text-3xl 2xl:text-4xl">LOREM IMPSUM</p>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute top-0 right-0 w-[200px] h-[60px] bg-stone-500 border-[6px] border-[#D6D9D7]  rounded-tl-[20px] rounded-bl-[20px] md:w-[300px] md:h-[70px] 2xl:w-[380px] 2xl:h-[80px]"></span>
          <span className="absolute -bottom-1 -left-1 w-[150px] h-[60px] bg-stone-500 border-[6px] border-[#D6D9D7]  rounded-tr-[20px] rounded-bl-[20px] md:w-[250px] md:h-[70px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[80px]"></span>
        </div>
      </section>
    </>
  );
};

export default Home;

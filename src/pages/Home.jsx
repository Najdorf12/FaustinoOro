import logo from "/logo.png";
import iconTarget from "/iconTarget.png";

const Home = () => {
  return (
    <>
      <section className=" w-full h-screen bg-[#e8e8e8] flex justify-center items-center z-50 ">
        <div
          className="w-[100%] rounded-b-[20px] h-[100%] relative bg-center bg-fixed bg-cover bg-no-repeat z-50 flex justify-end items-center "
          id="home"
        >
          <article className="flex flex-col justify-center items-center gap-3 text-center mt-[100%] sm:px-6 md:mt-[70%] lg:mt-[50%] xl:mt-[27%] xl:mr-[2%]">
            <h1 className="font-text2 text-6xl leading-[3.5rem] font-bold text-gray-200 md:text-7xl xl:text-[7rem] 2xl:text-[9rem] bg-clip-text text-transparent bg-gradient-to-b from-stone-500 to-white">
              FAUSTINO ORO
            </h1>
            <p className=" font-text2 font-semibold text-2xl text-stone-600  md:text-3xl xl:text-4xl xl:-mt-3">
              LOREM IMPSUM
            </p>
          </article>

          {/* BORDER BUTTONS */}
          <span className="absolute mt-1 mr-2 top-0 right-0 flex justify-center items-center gap-3  font-text2 text-black py-1 md:mr-4 lg:mt-3 lg:mr-6 lg:gap-5 2xl:gap-10 2xl:mr-12 2xl:mt-4">
            {/* <button className="bg-a00  w-[50px] px-2 py-2 rounded-md 2xl:w-[55px]">
              <img className="w-full " src={logo} alt="" />
            </button> */}
          </span>

          <span className="bg-[#e8e8e8] absolute -bottom-1 -left-1 pl-1 pt-[2px] w-[200px] h-[75px]  border-[6px] border-[#e8e8e8]  rounded-tr-[20px] rounded-bl-[20px] md:w-[250px] md:h-[70px] lg:w-[330px] 2xl:w-[400px] 2xl:h-[80px]">
            <p className=" text-2xl font-title3 font-medium leading-5 xl:text-[1.7rem] xl:leading-6">
              LOREM IMSPSUM DOLOR SIT{" "}
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;

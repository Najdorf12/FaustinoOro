const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-[#e8e8e8] flex flex-col font-title"
      >
        <article className="relative pt-24 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] sm:self-end xl:mr-[6%] xl:mt-6  2xl:max-w-[650px] 2xl:mt-20 2xl:mr-[10%] ">
          <h5 className="text-xl font-title4 text-stone-500 2xl:text-3xl">
            About me
          </h5>
          <h3 className="text-black text-3xl 2xl:text-5xl">
            ERASING NATIVE APIS LIKE INTERSECTION OBSERVER, CSS STICKY Y NOERS.
          </h3>
          <div className="w-[200px] h-[2px] bg-[#a1872f] rounded-md my-2"></div>
          <p className="mt-2 text-lg font-text2 2xl:text-[1.5rem]  text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut culpa
            consectetur ullam hic porro nobis exercitationem quam alias
            voluptatem quasi expedita magni. Atque obcaecati aliquid praesentium
            blanditiis, corporis necessitatibus deserunt.
          </p>
          <div class="scene font-title4 xl:mt-6">
            <div class="cube">
              <span class="side top">Easter</span>
              <span class="side front bg-zinc-800 ">Easter</span>
            </div>
          </div>
        </article>
        {/* <div className="w-[200px] h-[200px] bg-rose-800 rounded-md my-2"></div> */}
      </section>
    </>
  );
};

export default About;

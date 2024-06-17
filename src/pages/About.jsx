const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-[#e8e8e8] flex flex-col font-title"
      >
        <article className="relative pt-24 lg:pt-0 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] sm:self-end xl:mr-[7%] lg:mt-[4%] 2xl:mr-[12%] 2xl:mt-[6%]  2xl:max-w-[650px]   ">
          <h5 className="text-xl font-title4 text-stone-500 2xl:text-3xl">
            About me
          </h5>
          <h3 className="text-black text-3xl 2xl:text-5xl">
            ERASING NATIVE APIS LIKE INTERSECTION OBSERVER, CSS STICKY Y NOERS.
          </h3>
          <div className="w-[200px] h-[2px] bg-stone-500 rounded-md my-2"></div>
          <p className="mt-2 text-lg font-text2 2xl:text-[1.5rem]  text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut culpa
            consectetur ullam hic porro nobis exercitationem quam alias
            voluptatem quasi expedita magni. Atque obcaecati aliquid praesentium
            blanditiis, corporis necessitatibus deserunt.
          </p>
          <div className="mt-3 w-36 h-10 flex justify-center items-center px-5 bg-zinc-700 font-title4 font-medium text-white border-2 border-white md:hidden">
            Button
          </div>
          <div className="flex gap-8">
            <div class="invisible md:visible scene font-title4 font-medium xl:mt-6">
              <div class="cube">
                <span class="side top bg-wheat text-stone-800">button</span>
                <span class="side front bg-stone-400 text-white">button</span>
              </div>
            </div>
            <div class="invisible md:visible scene font-title4 font-medium xl:mt-6">
              <div class="cube">
                <span class="side top bg-stone-400 text-white">button 2</span>
                <span class="side front bg-wheat text-stone-800">button 2</span>
              </div>
            </div>
          </div>
        </article>
        {/* <div className="w-[200px] h-[200px] bg-rose-800 rounded-md my-2"></div> */}
      </section>
    </>
  );
};

export default About;

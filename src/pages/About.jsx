const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-zinc-900 flex flex-col font-title text-white"
      >
        <article className="pt-24 px-3 flex flex-col gap-3 z-50 sm:max-w-[550px] sm:self-end xl:mt-20 2xl:self-center 2xl:ml-[40%] 2xl:max-w-[650px] 2xl:mt-20">
          <h5 className="text-xl text-stone-500 2xl:text-3xl">About me</h5>
          <h3 className="text-3xl 2xl:text-5xl">
            ERASING NATIVE APIS LIKE INTERSECTION OBSERVER, CSS STICKY Y NOERS.
          </h3>
          <p className="mt-2 text-lg font-text 2xl:text-[1.3rem] text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut culpa
            consectetur ullam hic porro nobis exercitationem quam alias
            voluptatem quasi expedita magni.
            Atque obcaecati aliquid praesentium blanditiis, corporis necessitatibus deserunt. 
          </p>
        </article>
      </section>
    </>
  );
};

export default About;

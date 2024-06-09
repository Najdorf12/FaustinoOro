const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen bg-zinc-900 flex flex-col font-title text-white"
      >
        <article className="pt-24 px-3 flex flex-col gap-3 z-50">
          <h5 className="text-xl text-gray-400">About me</h5>
          <h3 className="text-3xl">
            ERASING NATIVE APIS LIKE INTERSECTION OBSERVER, CSS STICKY Y NOERS.
          </h3>
          <p className="mt-2 text-lg font-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut culpa
            consectetur ullam hic porro nobis exercitationem quam alias
            voluptatem quasi expedita magni.{" "}
            {/* atque obcaecati aliquid praesentium blanditiis, corporis necessitatibus deserunt. */}
          </p>
        </article>
      </section>
    </>
  );
};

export default About;

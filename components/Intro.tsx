import React from "react";

const Intro = () => {
  return (
    <div className="space-y-5 mt-20 md:h-[80vh]">
      <h3 className="text-3xl text-neongreen font-fira">Hi, my name is</h3>
      <h1 className="text-6xl font-extrabold text-text md:text-8xl">
        Avneesh Agarwal
      </h1>
      <h2 className="text-4xl text-textdark md:text-6xl">
        I build awesome websites!
      </h2>
      <h4 className="w-4/5 md:w-3/5 text-textdark">
        I&rsquo;m a <span className="text-neongreen">Frontend Developer</span>{" "}
        focused on creating amazing UIs to solve business problems around the
        globe. I’m a school kid participating in Hackathons and solving problems
        to build something cool :D
      </h4>
      <button className="py-2 px-5 !mt-10 hover:bg-neongreen/90 hover:border-neongreen/90 hover:backdrop-blur-lg hover:text-white duration-100 border-neongreen border-2 text-neongreen rounded-lg">
        Reach out to me!
      </button>
    </div>
  );
};

export default Intro;

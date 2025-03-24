import React from "react";

const About = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold  leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-black tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, earum,
        enim blanditiis eos ducimus, excepturi illum beatae dicta cupiditate
        unde eius distinctio harum quasi ut accusamus ex. Pariatur, a. Illo
        veniam nesciunt necessitatibus explicabo praesentium illum. Perferendis,
        error harum. Architecto.
      </p>
    </>
  );
};

export default About;

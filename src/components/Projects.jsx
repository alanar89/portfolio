//import Transition from "../transition";
import SliderProject from "./SliderProject";

const Projects = () => {
  return (
    <section className=" h-screen  text-white flex justify-center  bg-dark-violet items-center  bg-gradient-to-r from-dark-violet via-black/50">
      {/* <Transition /> */}
      <div className="container items-center  ">
        <div className="flex flex-col w-full h-full">
          <div className="text-center flex flex-col mb-4 ">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold ">
              Mis Proyectos<span className="text-[#FFC039]">.</span>
            </h2>
            {/* <p className="mb-4 mx-auto">Algunos de mis proyectos realizados.</p> */}
          </div>
          <div className="mx-2 lg:mx-auto">
            <SliderProject />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;

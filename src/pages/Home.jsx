import Particle from "../components/Particle";
import { FaArrowRightLong } from "react-icons/fa6";
import avatar from "/avatar1.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className=" h-screen relative w-full text-white flex  bg-dark-violet items-center">
      <div className="container w-full mx-auto   gap-4 flex   h-full justify-center  items-center bg-gradient-to-r from-dark-violet via-black/50">
        <div className=" lg:mr-36">
          <h1 className="text-5xl font-bold">
            Alan
            <span className="text-[#FFC039]"> Arregui</span>
          </h1>
          <p className="text-gray-200 my-10 max-w-xl text-2xl  font-bold text">
            Desarrollador Web FullStack
          </p>
          <div className="flex gap-4 justify-center lg:justify-normal">
            <Link to={"/projects"}>
              <button
                className=" p-2 rounded-full border-2 font-semibold border-white/50 max-w-[190px] 
            px-8 transition-all duration-300 flex  items-center justify-center overflow-hidden hover:border-[#FFC039] group"
              >
                <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Mis Proyectos
                </span>
                <FaArrowRightLong className="opacity-0 group-hover:flex text-[#FFC039] -translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </Link>
            {/* <button className="bg-[#FFC039] p-1 rounded flex items-center">
              Curriculum
              <FaFileArrowDown class="w-5 h-5"></FaFileArrowDown>
            </button> */}
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-0  right-0 max-w-[600px] 2xl:max-w-[840px]">
          <img src={avatar} alt="" className="" />
        </div>
      </div>
      <Particle />
    </section>
  );
};
export default Home;

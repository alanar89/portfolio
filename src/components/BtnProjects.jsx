import proyecto from "../../public/proyecto.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const BtnProjects = () => {
  return (
    <div>
      <Link
        to={"/projects"}
        className="relative flex justify-center items-center group"
      >
        <img
          src={proyecto}
          alt=""
          className="p-2  w-full h-full max-w-[140px] max-h-[150px] border-2 group-hover:border-[#FFC039] rounded-full"
        />
        <FaArrowRight class="absolute anima text-white text-2xl group-hover:text-[#FFC039]  group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default BtnProjects;

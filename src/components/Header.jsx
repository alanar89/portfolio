import { Link } from "react-router-dom";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import logo from "/logo.png";
const Header = () => {
  return (
    <header className="z-30 w-full h-12 flex absolute items-center  text-white">
      <div className="container mx-auto w-[80vw]">
        <div className="flex  flex-col lg:flex-row justify-between items-center mt-10   md:gap-y-6 md:py-8">
          <div className="my-5 md:my-0">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 text-2xl">
            <Link to={"/"} className="hover:text-[#FFC039]" title="Linkedin">
              <FaLinkedin />
            </Link>
            <Link to={"/"} className="hover:text-[#FFC039]" title="Github">
              <FaSquareGithub />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

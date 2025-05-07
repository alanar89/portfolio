import { FaHouse, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const menu = [
  {
    nombre: "Inicio",
    icono: <FaHouse />,
    enlace: "/",
  },
  {
    nombre: "Perfil",
    icono: <FaUser />,
    enlace: "/about",
  },
  {
    nombre: "Proyectos",
    icono: <FaBriefcase />,
    enlace: "/projects",
  },
  {
    nombre: "Contacto",
    icono: <FaEnvelope />,
    enlace: "/contact",
  },
];
const NavBar = () => {
  return (
    <nav className=" bottom-0 flex flex-col items-center w-full lg:right-[2%] justify-center xl:w-16 z-40 gap-y-4 fixed mt-auto lg:h-screen">
      <div className="flex w-full   gap-8 md:rounded-full items-center text-xl text-gray-50 h-[80xp]  px-2 py-4 lg:flex-col justify-between bg-white/10">
        {menu.map((item) => (
          <div
            key={item.nombre}
            className="group flex items-center rounded-full "
          >
            <NavLink
              to={item.enlace}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFC039] p-2 z-20 rounded-full  lg:group-hover:bg-[#FFC039] lg:group-hover:text-white"
                  : "p-2 z-20 rounded-full group-hover:text-[#FFC039] lg:group-hover:text-white lg:group-hover:bg-[#FFC039]"
              }
            >
              {item.icono}
            </NavLink>
            <span className=" uppercase bg-opacity-75 absolute text-center right-8 overflow-hidden w-36  hidden  lg:group-hover:block  bg-[#FFC039] px-3 py-2 rounded-l-full text-sm text-white font-black">
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};
export default NavBar;

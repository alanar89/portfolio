import { useState } from "react";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaArrowDown } from "react-icons/fa6";
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState("Skills");
  return (
    <section className=" h-screen w-full  text-white flex bg-dark-violet items-center">
      {/* <Transition /> */}
      <div className="container  flex flex-col xl:flex-row mx-auto w-full justify-center h-full gap-x-6 items-center  bg-gradient-to-r from-dark-violet via-black/50">
        <div className="flex w-full xl:max-w-[45%] flex-col  items-center lg:items-start mx-2">
          <h2 className="text-3xl md:text-5xl md:mb-4 font-bold w-full flex justify-center lg:justify-normal">
            Sobre mi
            <span className="text-[#FFC039] text-3xl md:text-5xl">.</span>
          </h2>
          <p className="lg:max-w-[500px] text-white mx-auto xl:m-0  py-2 xl:px-0 text-sm  md:text-base">
            ¡Hola! Soy Alan, desarrollador web autodidacta y freelancer. Un
            apasionado por explorar y aprender las últimas tendencias
            tecnológicas que demanda el mercado laboral actual. Respecto de mis
            objetivos, busco enfocarme en nuevos desafíos que ayuden a mejorar
            mis habilidades e incorporar nuevos conocimientos para mantenerme en
            constante crecimiento.
          </p>
          <div className=" hidden md:flex w-full gap-10  justify-center lg:justify-normal lg:max-w-[500px] my-4 md:my-10">
            <div className="">
              <div className="text-2xl xl:text-4xl font-extrabold text-[#FFC039] mb-2">
                <CountUp start={0} end={3} duration={3} delay={1}></CountUp>+
              </div>
              <div className="text-xs uppercase w-full font-bold">
                Años De Experiencia
              </div>
            </div>
            <div className="">
              <div className="text-2xl xl:text-4xl font-black text-[#FFC039] mb-2">
                <CountUp start={0} end={50} duration={6} delay={1}></CountUp>+
              </div>
              <div className="text-xs uppercase w-full font-bold">
                Proyectos Finalizados
              </div>
            </div>
          </div>
          <div className="items-center w-full justify-center flex lg:justify-normal">
            <button
              className="my-2 md:my-0 p-2 rounded-full border-2 border-white/50  justify-center  lg:max-w-[180px] 
            px-8 transition-all duration-300 flex  l overflow-hidden hover:border-[#FFC039] group"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Descargar CV
              </span>
              <FaArrowDown className="opacity-0 group-hover:flex text-[#FFC039] -translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full  xl:max-w-[40%] mt-4 md:mt-10 h-[25vh] md:h-[40vh]">
          {/* <div className="container mx-auto h-full flex md:flex-col items-center xl:flex-row gap-x-4"> */}

          <div className="flex gap-x-4 mx-auto xl:mx-0 mb-4">
            <div
              className={`${
                index === "Skills" &&
                "text-[#FFC039] after:w-full after:bg-[#FFC039] after:transition-all after:duration-300"
              }
          cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex("Skills")}
            >
              Skills
            </div>

            <div
              className={`${
                index === "Experiencia" &&
                "text-[#FFC039] after:w-full after:bg-[#FFC039] after:transition-all after:duration-300"
              }
          cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex("Experiencia")}
            >
              Experiencia
            </div>

            <div
              className={`${
                index === "Educacion" &&
                "text-[#FFC039] after:w-full after:bg-[#FFC039] after:transition-all after:duration-300"
              }
          cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex("Educacion")}
            >
              Educacion
            </div>
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {index === "Skills" && (
              <div className=" mx-4">
                <div className="text-gray-300">Desarrollo web</div>
                <div className="flex-col text-2xl text-[#FFC039] gap-4">
                  <div className="flex my-2 md:my-4 gap-4">
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiTailwindcss />
                    <SiBootstrap />
                    <SiReact />
                    <SiJquery />
                    <SiGit />
                  </div>
                  <div className="flex text-2xl gap-4 my-2 md:my-4">
                    <SiPhp />
                    <SiLaravel />
                    <SiNodedotjs />
                    <SiMysql />
                    <SiMongodb />
                  </div>
                </div>
                <div className="text-gray-300">Diseño web</div>
                <div className="flex text-2xl gap-4 my-2 md:my-4 text-[#FFC039]">
                  <SiFigma />
                  <SiAdobephotoshop />
                  <SiAdobeillustrator />
                </div>
              </div>
            )}
            {index === "Experiencia" && (
              <div className=" mx-4">
                {/* <div className="text-gray-300">Desarrollo web</div> */}
                <p className="">
                  <span className="text-[#FFC039] font-bold text-3xl">. </span>
                  Desarrollador web full-stack, freelancer ( Mayo 2022 –
                  actualidad).
                </p>
                <p className="">
                  <span className="text-[#FFC039] font-bold text-3xl">. </span>
                  Desarrollador web full-stack, freelancer ( Enero 2020 –
                  Febrero 2021).
                </p>
              </div>
            )}
            {index === "Educacion" && (
              <div>
                <div className="text-gray-300 mx-4">
                  <p className="">
                    <span className="text-[#FFC039] font-bold text-3xl">
                      .{" "}
                    </span>
                    Tecnicatura Universitaria en Web
                  </p>
                  <p className="">Universidad Nacional de San Luis</p>
                  <p className="">San Luis, Argentina(2014-2018).</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

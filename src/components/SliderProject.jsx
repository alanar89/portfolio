import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaGithub, FaLink } from "react-icons/fa6";

const SliderProject = () => {
  //
  const workSlides = {
    slides: [
      {
        images: [
          {
            title: "YouTube Clone",
            path: "/thumb1.jpg",
            description:
              "Aplicacion clon de Youtube utilzando React, TailWind y rapidAPI",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
          {
            title: "Real State",
            path: "/thumb2.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
          {
            title: "E-commerce",
            path: "/thumb5.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
          {
            title: "Blog",
            path: "/thumb6.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
        ],
      },
      {
        images: [
          {
            title: "title5",
            path: "/thumb21.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
          {
            title: "title6",
            path: "/thumb22.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
          {
            title: "title7",
            path: "/thumb3.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
          {
            title: "title8",
            path: "/thumb44.jpg",
            techs: ["HTML", "TailWind", "React"],
            icons: [FaGithub, FaLink],
          },
        ],
      },
    ],
  };

  return (
    <Swiper
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-full   h-[30vh]  md:h-[45vh]   lg:h-[65vh]  lg:w-[50vw]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex  group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <img className="rounded" src={image.path} alt="" />
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-[#050505] via-[#e48b06] to-[#050505]
              opacity-0 group-hover:opacity-80 transition-all duration-700 "
                      ></div>
                      <div
                        className="absolute  bottom-0 translate-y-full group-hover:-translate-y-10
                      group-hover:xl:-translate-y-20 transition-all duration-300 font-black text-gray-200"
                      >
                        <div className="flex">{image.title}</div>
                        <div className="hidden md:flex">
                          {image.description}
                        </div>
                        <div className="hidden md:flex">
                          {image.techs.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </div>
                        <div className="flex mt-4 text-2xl md:text-3xl   ">
                          {image.icons.map((Icon, index) => (
                            <Icon key={index} className="mx-4" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderProject;

import { FaArrowRightLong } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className=" h-screen w-full text-white flex  bg-dark-violet items-center">
      {/* <Transition /> */}
      <div className="container xl:text-left text-center flex  mx-auto w-full justify-center h-full gap-x-6 items-center  bg-gradient-to-r from-dark-violet via-black/50">
        <div className="flex flex-col w-full max-w-[700px] mx-3">
          <h2 className="text-3xl md:text-5xl mb-6 font-bold ">
            Contacto<span className="text-[#FFC039] text-5xl">.</span>
          </h2>

          <form action="" className="flex flex-1 mx-auto gap-6 flex-col w-full">
            <div className="flex flex-col md:flex-row  gap-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="asunto" className="input" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="mensaje"
              className="textarea"
            ></textarea>
            <button
              className=" p-4 md:p-2 rounded-full border-2 border-white/50 md:max-w-[170px] 
            px-8 transition-all duration-300 flex  items-center justify-center overflow-hidden hover:border-[#FFC039] group"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                enviar
              </span>
              <FaArrowRightLong className="opacity-0 group-hover:flex text-[#FFC039] -translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
     const [isScrolled, setIsScrolled] = useState(false);
     const currentYear = new Date().getFullYear();


     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     };
     
    useEffect(() => {   
         const handleScroll = () => {
           if (window.scrollY > 100) {
             setIsScrolled(true);
           } else {
             setIsScrolled(false);
           }
         };

         window.addEventListener("scroll", handleScroll);

        //  clean up 
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

  return (
    <section className=" bg-black h-60 grid ">
      <div className="flex gap-x-4 mt-4 items-center mx-auto ">
        <a href="#">
          <FaGithubSquare className="h-8 w-8 text-sky-500 hover:text-sky-900 duration-100 hover:animate-bounce" />
        </a>
        <a href="#">
          <FaLinkedin className="h-8 w-8 text-sky-500 hover:text-sky-900 duration-300 hover:animate-bounce" />
        </a>
        <a href="#">
          <FaFacebook className="h-8 w-8 text-sky-500 hover:text-sky-900 duration-300 hover:animate-bounce" />
        </a>
      </div>
      <p className="text-lg text-white items-center mx-auto">
        &copy; {currentYear} Codez Wayz. All rights reserved
      </p>
      <div>
        <button
          className={`${
            isScrolled ? "block" : "hidden"
          } fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-700 cursor-pointer font-extrabold`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      </div>
    </section>
  );
};

export default Footer;

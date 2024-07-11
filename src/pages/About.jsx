import { useState } from "react";
import aboutSvg from "../assets/emeka.jpg";
import SectionTitle from "../components/SectionTitle"
import { aboutInfo } from "../data";
import { motion } from "framer-motion";


const AboutPage = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-8 py-4 grid md:grid-cols-2 items-center gap-16">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          src={aboutSvg}
          alt=""
          className="w-80 h-96 rounded"
        />
        <article>
          <SectionTitle text="All about codezwayz" />
          {aboutInfo.map((about) => {
            const { id, info, paraInfo } = about;
            return (
              <div key={id}>
                <motion.h2
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="mt-4 text-lg"
                >
                  {info}
                </motion.h2>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="text-slate-600 mt-8 leading-loose"
                  key={about.id}
                >
                  <p>

                  {readMore ? paraInfo : `${paraInfo.substring(0, 400)}...`}
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className="hover:text-emerald-400 text-gray-950 bg-slate-100 text-lg px-1 font-bold transition-all duration-300 ease-linear"
                  >
                    {readMore ? "Show Less" : "Read More"}
                  </button>
                  </p>
                </motion.p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default AboutPage;




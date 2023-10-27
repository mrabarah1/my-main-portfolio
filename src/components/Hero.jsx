import React from 'react'
import { FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import heroImg from '../assets/emeka.jpg'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#52525253] py-24  duration-300">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 3,
            }}
            className="text-5xl font-bold tracking-wide"
          >
            Hello, i am Emeka Abarah and i welcome you to my portfolio website
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl mt-6 tracking-wide text-slate-800 "
          >
            this portfolio was designed using tailwind css,context api, usestate hook, to manage state and also used react router to enable clients-side routing and it is SEO friendly and mobile responsive.
          </motion.p>
          {/* <p className="mt-2 text-lg text-slate-800 capitalize">hello</p> */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex gap-x-4 mt-4"
          >
            <a href="https://github.com/mrabarah1" target='_blank' rel='noreferrer'>
              <FaGithubSquare className="h-8 w-8 text-slate-600 hover:text-black duration-100 hover:animate-bounce" />
            </a>
            <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BKe%2BoyfnLS3Odo%2FUrjB%2FRDQ%3D%3D" target='_blank' rel='noreferrer'>
              <FaLinkedin className="h-8 w-8 text-sky-700 hover:text-sky-900 duration-100 hover:animate-bounce" />
            </a>
            <a href="https://web.facebook.com/Tiamuller" target='_blank' rel='noreferrer'>
              <FaFacebook className="h-8 w-8 text-sky-700 hover:text-sky-900 duration-100 hover:animate-bounce" />
            </a>
          </motion.div>
        </article>
        <article className="hidden md:block">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 4,
            }}
            src={heroImg}
            alt=""
            className="border-0 h-80 lg:h-96"
          />
        </article>
      </div>
    </section>
  );
}

export default Hero

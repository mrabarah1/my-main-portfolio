import { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { FaMapPin, FaPhone, FaMailBulk } from "react-icons/fa";
import { motion } from 'framer-motion'



const Contact = () => {
    const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event) => {
      event.preventDefault();
    }

    
    
  return (
    <>
    {/* <section className="bg-white px-10 py-24">

    </section> */}
      <div className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-8 py-4 grid md:grid-cols-2 items-center gap-16">
        <SectionTitle text="Contact Me" />
          <motion.div
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
            className="mt-8 text-2xl "
          >
            <div className="">
              <h2 className="font-semibold">Let's create the future</h2>
              <p>
                I'm available for collabrations and will be excited to hear from
                you.
              </p>
            </div>
            <div className="mt-14 ">
              <div className="flex justify-center items-center font-medium gap-x-6 mb-4">
                <FaMapPin className="mr-12" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex justify-center items-center font-medium gap-x-6 mb-4">
                <FaPhone className="mr-12" />
                <a href="tel:+2348140779190">+2348140779190</a>
              </div>
              <div className="flex justify-center items-center font-medium gap-x-6 mb-4">
                <FaMailBulk />
                <a href="mailto:mrabarah@gmail.com">mrabarah@gmail.com</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="my-0 sm:max-w-md p-5 bg-[#00000085] shadow-md overflow-hidden sm:rounded-lg rounded mt-2 mb-10"
          >
            <form onSubmit={submitForm} className="mt-8">
              <h1 className="text-2xl capitalize text-white mx-auto px-8">
                contact form
              </h1>

              {/* Email Address */}
              <div className="relative mb-12 mt-10">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <Label htmlFor="email">Email</Label>
              </div>

              {/* Password */}
              <div className="relative mb-12 mt-14">
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="new-password"
                />
                <Label htmlFor="password">Password</Label>
              </div>

              <Button className="mb-2 w-full justify-center py-4 text-center text-xs font-bold">
                <Link href="#">Register</Link>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact

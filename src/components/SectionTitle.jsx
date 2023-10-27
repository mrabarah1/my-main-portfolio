import { motion } from "framer-motion"



const SectionTitle = ({text}) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-3xl font-medium capitalize tracking-wider"
      >
        {text}
      </motion.h2>
    </div>
  );
}

export default SectionTitle

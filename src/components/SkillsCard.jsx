import { motion } from "framer-motion"

const SkillsCard = ({skill}) => {
    const {icon, title, text} = skill
  return (
    <motion.article
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.2 },
        ease: "easeIn",
        duration: 1,
      }}
    >
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </motion.article>
  );
}

export default SkillsCard

import { nanoid } from 'nanoid';
import projectImg from "./assets/sneakers-ecomm.png";
import projectImg2 from "./assets/backroadspicz.png";
import projectImg3 from "./assets/dashboardpicz.png";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaWpforms,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), url: '/', text: 'home' },
  { id: nanoid(), url: 'skills', text: 'skills' },
  { id: nanoid(), url: 'about', text: 'about' },
  { id: nanoid(), url: 'projects', text: 'projects' },
  { id: nanoid(), url: 'contact', text: 'contact' },
];

export const secondLinks = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/skills",
    text: "skills",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
    icon: <FaPhone />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];


export const socials = [
  {
    id: 1,
    url: "https://github.com/mrabarah1",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BKe%2BoyfnLS3Odo%2FUrjB%2FRDQ%3D%3D",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];



export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-500 hover:bg-sky-900" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-orange-400 hover:bg-sky-900" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500 hover:bg-sky-900" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <FaReact className="h-16 w-16 text-sky-500 hover:bg-sky-900" />,
    text: "Intermidiate proficiency in React Native, developing efficient and interactive mobile applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: projectImg,
    url: "https://ecommercecheckpoint.netlify.app/",
    github: "https://github.com/mrabarah1",
    title: "e-commerce",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: projectImg2,
    url: "https://backroadsproj.netlify.app/",
    github: "https://github.com/mrabarah1",
    title: "backroads",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: projectImg3,
    url: "https://dashboardproj.netlify.app/",
    github: "https://github.com/mrabarah1",
    title: "dashboard",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];

export const aboutInfo = [
  {
    id: 1,
    info: "Software Engineer",
    paraInfo:
      "I'm, a passionate MERN stack Full Stack Engineer with a love for crafting powerful mobile and web applications.I specialize in building seamless user experiences and bringing ideas to life through clean and efficient code. As a techenthusiast, I find joy in working with MongoDB, Express, React,ReactNative and Node.js to create dynamic and interactive applications. My expertise lies in developing backend functionalities, designing user interfaces, and optimizing performance to deliver top-notch results.I am always excited to collaborate with driven teams and contribute my skills to exciting projects. When I am not coding,you can find me exploring new technologies, attending tech meetups, and enjoying a good cup of coffee. I believe in continuous learning and pushing boundaries to stay ahead in the ever-evolving tech world. I'm currently seeking opportunities to take on new challenges and grow as a developer.",
  },
];


// import { FaTimes } from "react-icons/fa";
// import { useGlobalContext } from "../context";
// import { secondLinks, socials } from "../data";
// import { motion } from "framer-motion";
// import { Link, NavLink } from "react-router-dom";





// const Sidebar = () => {
//     const {isSidebarOpen, closeSidebar} = useGlobalContext();
//     // const menuBar = {
//     //     initial: {
//     //         scaleY: 0,
//     //     },
//     //     animate: {
//     //         scaleY: 1,
//     //         transition: {
//     //             duration: 0.5,
//     //         }

//     //     },
//     //     exit: {
//     //         scaleY: 0,
//     //     },
//     // }
//   return (
//     <aside
//       className={
//         isSidebarOpen ? "sidebar origin-left  translate-x-0 duration-500" : "sidebar"
//       }
//     >
//       <div className="flex justify-between items-center gap-x-10">
//         <Link href="/" className="text-3xl font-bold cursor-pointer">
//           codez<span className="text-emerald-600">wayz</span>
//         </Link>
//         <button
//           onClick={closeSidebar}
//           className="text-3xl bg-transparent border-transparent text-rose-800 cursor-pointer ml-60"
//         >
//           <FaTimes />
//         </button>
//       </div>
//       {/*  sidebar links */}
//       <ul>
//         {secondLinks.map((link) => {
//           const { id, href, text, icon } = link;
//           return (
//             <li className="flex items-center text-xl capitalize px-8 py-7 text-slate-950 transition-all duration-300 ease-in-out tracking-wider hover:text-emerald-900 cursor-pointer mr-72">
//               <span className="mr-2">{icon}</span>
//               <NavLink
//                 key={id}
//                 href={href}
//                 // className="flex items-center text-xl capitalize px-6 py-7 text-slate-950 transition-transform tracking-wider hover:text-emerald-900 cursor-pointer"
//               >
//                 {text}
//               </NavLink>
//             </li>
//           );
//         })}
//       </ul>

//       <ul className="flex justify-center items-center gap-8 mr-60">
//         {socials.map((link) => {
//           const { id, url, icon } = link;
//           return (
//             <motion.li
//               key={id}
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{
//                 delay: 0.2,
//                 x: { type: "spring", stiffness: 60 },
//                 opacity: { duration: 1 },
//                 ease: "easeIn",
//                 duration: 3,
//               }}
//             >
//               <NavLink href={url} className="text-2xl">{icon}</NavLink>
//             </motion.li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar





// // const Sidebar = () => {
   

// //   return (
// //     <div className="relative">
// //       <button
// //         onClick={toggleSidebar}
// //         className="hidden md:block top-4 right-4 text-3xl bg-transparent border-transparent cursor-pointer text-[#bb2525] transition-all duration-300 ease-linear hover:text-[#e66b6b]"
// //         id="close-btn "
// //       >
// //         <i className="fas fa-times"></i>
// //       </button>

// //       <aside
// //         className={`${
// //           showSidebar ? "transform translate-x-0" : "-translate-x-full"
// //         } fixed  top-0 left-0 w-full h-full bg-slate-400 z-40 grid place-items-center transition-transform`}
// //         id="sidebar"
// //       >
// //         {/*  sidebar links */}
// //         <div className="text-center">
// //           {links.map((link) => {
// //             const { id, href, text } = link;
// //             return (
// //               <a
// //                 key={id}
// //                 href={href}
// //                 className="capitalize text-2xl font-semibold tracking-wide hover:text-emerald-600 duration-300 inline-block mb-6 leading-tight transition"
// //               >
// //                 {text}
// //               </a>
// //             );
// //           })}
// //         </div>
// //       </aside>
// //     </div>
// //   );
// // }

// // export default Sidebar;


// {/* <Head>
//                 <title>
//                     Plan | Frameeye - Watch Short Films Online, Watch Movies
//                     Online
//                 </title>
//             </Head>
//             <header className=" top-0  flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6">
//                 <Link href="/">
//                     <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
//                 </Link>
//                 <button
//                     className="text-lg font-medium bg-[#e50914] px-4 py-2 rounded text-white hover:bg-red-700"
//                     onClick={logout}>
//                     Log Out
//                 </button>
//             </header> */}
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineDownload } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Kalam } from "next/font/google";
import Image from "next/image";
import profilePic from "../../public/ryoma.jpeg";
import multiplayerChess from "../../public/multiplayerChess.png";
import faveVault from "../../public/faveVault.png";
import { useState } from "react";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });
const resumeLink = "resume.pdf";
const contacts = [
  { icon: <AiFillGithub />, link: "https://github.com/BenDaBeast22" },
  { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/benjamin-critoph/" },
  { icon: <AiFillMail />, link: "bcritoph@uoguelph.ca" },
];
const projects = [
  {
    name: "Multiplayer Chess Game",
    p: "A responsive multiplayer chess game created using React where users could send a link to play chess and communicate with their friends. The multiplayer functionality was implemented using web sockets and users could communicate via video call and chat",
    img: multiplayerChess,
    alt: "multiplayer chessgame image",
    link: "https://multiplayer-chess.onrender.com/",
  },
  {
    name: "Bookmark Saving Site",
    p: "A responsive website where users could save bookmarks, images, and create rankings in collections. Moreover users were able to add friends to view their friends collections",
    img: faveVault,
    alt: "Bookmark saving site image",
    link: "https://favevault-35283.web.app/",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ben Critoph Portfolio</title>
      </Head>
      <main className="bg-blue-100 text-gray-700 px-20 lg:px-30 dark:bg-slate-700 transition-colors duration-300">
        <section>
          <nav className="py-10 flex justify-right justify-end">
            {/* <h1 className={`${kalam.className} text-xl dark:text-white`}>Ben Critoph</h1> */}
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 from text-indigo-600 lg:text-6xl dark:text-white">Benjamin Critoph</h2>
            <h3 className="text-2xl py-2 lg:text-3xl text-gray-600 dark:text-gray-200">
              <em>Software Developer</em>
            </h3>
            <p className="text-gray-700 text-lg mx-auto py-2 mb-4 leading-8 lg:text-xl max-w-lg dark:text-white">
              Fourth year computer science co-op student at the University of Guelph. Currently looking for a summer
              job!
            </p>
            <div className="flex justify-center">
              <a
                className="w-30 bg-indigo-600  hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white flex justify-center items-center px-4 py-2 rounded-md"
                href={resumeLink}
                download="resume"
              >
                <span className="mr-2">Resume</span>
                <FiDownload />
              </a>
            </div>
          </div>
          {/* <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profilePic} layout="fill" objectFit="cover" alt="profle pic" />
          </div> */}
        </section>

        <section className="projects">
          <h3 className="text-indigo-700 text-3xl lg:text-4xl py-1 dark:text-white mb-5">Projects</h3>
          <div className="flex flex-wrap justify-between gap-5">
            {projects.map((project, index) => (
              <div
                className=" md:grow lg:w-5/12 overflow-hidden bg-white shadow-lg shadow-slate-900/25 mb-5 rounded-lg"
                key={index}
              >
                <a href={project.link} target="_blank">
                  <Image src={project.img} alt={project.alt} className="cursor-pointer" />
                </a>
                <div className="p-4 text-gray-700">
                  <h3 className="border-b-2 border-slate-400 text-2xl pb-2 mb-2">{project.name}</h3>
                  <p>{project.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-me">
          <h3 className="text-indigo-700 text-3xl lg:text-4xl py-1 dark:text-white mb-5">Contact Me</h3>
          <div className="pb-3 text-slate-600 dark:text-white">
            {contacts.map((contact) => (
              <div className="flex items-center mb-5">
                <span className="text-3xl hover:text-slate-500 mr-3">{contact.icon}</span>
                <a
                  className="text-blue-600 hover:text-blue-500 dark:text-indigo-300 dark:hover:text-indigo-200 underline"
                  href={contact.link}
                  target="_blank"
                >
                  {contact.link}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

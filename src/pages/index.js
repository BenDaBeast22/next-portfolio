import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import profilePic from "../../public/profilePic.jpeg";
import multiplayerChess from "../../public/multiplayerChess.png";
import faveVault from "../../public/faveVault.png";
import yelpCamp from "../../public/yelpCamp.png";
import ecommerce from "../../public/ecommerce.png";
import { useEffect, useState } from "react";

const resumeLink = "Ben Critoph Tech Resume 2023.pdf";
const worktermReportLinks = [
  { name: "Workterm Report S-22", link: "https://bendabeast22.github.io/UoG-Work-Term-Report-S22/" },
  { name: "Workterm Report W-21", link: "https://bendabeast22.github.io/UoG-Work-Term-Report-W21/" },
];
const contacts = [
  { icon: <AiFillGithub />, link: "https://github.com/BenDaBeast22" },
  { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/benjamin-critoph/" },
  { icon: <AiFillMail />, link: "bcritoph@uoguelph.ca" },
];
const projects = [
  {
    name: "Multiplayer Chess Game",
    p: "A responsive multiplayer chess app created using React and Node Js where users can quickly start a chess game by sending a link to their opponents. Moreover, players can communicate via chat or video call. The multiplayer and communication functionality was implemented using web sockets. The api for the chess logic was written by me. The app is hosted on render.com. Note that it takes about 30 seconds for it to start up since I deployed it using the free version.",
    img: multiplayerChess,
    alt: "multiplayer chessgame image",
    link: "https://multiplayer-chess.onrender.com/",
  },
  {
    name: "Collection Listing Website",
    p: "A responsive website created using React and Firebase where users can save their bookmarks, images, lists and rankings in collections. Moreover users can add friends to share their collections. I used Firebase for user authentication and for security rules for proper CRUD functionality. The website is hosted on Firebase and you can create an account to try it out! This app is meant to be an organization hub for quick access to things that you love.",
    img: faveVault,
    alt: "Bookmark saving site image",
    link: "https://favevault-35283.web.app/",
  },
  {
    name: "Campground Listing Website",
    p: "A RESTful website that lists details of user added campgrounds. Users must first sign up to create an account and login in order to add their own campgrounds to the website, or to comment on added campgrounds. The website was built with Node.js using the express framework, HTML, CSS and Bootstrap. MongoDB and Mongoose were used to implement and manipulate a database to store the campgrounds, comments and user info. Heroku was used to deploy the website.",
    img: yelpCamp,
    alt: "Campground listing website image",
    link: "https://stark-waters-13391.herokuapp.com/",
  },
  {
    name: "E-Commerce App",
    p: "Used Java to create an E-Commerce app in a Gradle environment and improved the app by making a GUI with Swing. How it works is you can add either book or electronics products to the app and then you can search for the products using it's id, description and year. The app also uses a hash table to speed up seaching for words in the description.",
    img: ecommerce,
    alt: "E-commerce app image",
    link: "https://github.com/BenDaBeast22/Java-Ecommerce-App",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(null);
  const toggleTheme = () => {
    const toggleDark = !darkMode;
    setDarkMode(toggleDark);
    if (toggleDark) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);
  return <>{darkMode !== null && App()}</>;

  function App() {
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Ben Critoph Portfolio</title>
        </Head>
        <main className="min-h-screen bg-white dark:bg-slate-700 text-gray-700 px-20 lg:px-40 transition-colors duration-300">
          <section className="intro mb-5">
            <nav className="py-10 flex justify-right justify-end">
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={toggleTheme} className="cursor-pointer text-2xl dark:text-white" />
                </li>
              </ul>
            </nav>
            <div className="text-center p-5">
              <h2 className="text-5xl py-2 from text-indigo-600 lg:text-6xl dark:text-white">Benjamin Critoph</h2>
              <h3 className="text-2xl py-2 mb-3 lg:text-3xl text-gray-600 dark:text-gray-100">
                <em>Software Developer</em>
              </h3>
              <div className="relative mx-auto mb-3 rounded-full w-60 h-60 lg:h-80 lg:w-80 overflow-hidden">
                <Image src={profilePic} alt="profle pic" />
              </div>
              <p className="text-gray-700 text-lg mx-auto py-2 mb-4 leading-8 lg:text-xl max-w-lg dark:text-white">
                Fourth year computer science co-op student at the University of Guelph. Currently working at Camis Inc
                as a Software Developer.
              </p>
              <div className="flex justify-center mb-3">
                <a
                  className="w-30 bg-indigo-600  hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white flex justify-center items-center px-4 py-2 rounded-md"
                  href={resumeLink}
                  download="resume"
                >
                  <span className="mr-2">Resume</span>
                  <FiDownload />
                </a>
              </div>
              <p className="text-gray-700 text-lg mx-auto py-2 mb-4 leading-8 lg:text-xl max-w-lg dark:text-white">
                Check out my workterms from my previous co-ops below:
              </p>
              <div className="flex justify-center gap-5">
                {worktermReportLinks.map((worktermReportLink, index) => (
                  <a
                    className="w-30 bg-gray-500  hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-400 text-white flex justify-center items-center px-4 py-2 rounded-md"
                    href={worktermReportLink.link}
                    download="resume"
                    key={index}
                  >
                    <span className="mr-2">{worktermReportLink.name}</span>
                    <FiDownload />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="projects mb-5">
            <h3 className="text-indigo-700 text-3xl lg:text-4xl py-1 dark:text-white mb-8">Projects</h3>
            <div className="flex flex-wrap justify-between gap-5">
              {projects.map((project, index) => (
                <div
                  className="md:grow lg:w-5/12 overflow-hidden bg-white shadow-lg shadow-slate-900/25 mb-5 rounded-lg"
                  key={index}
                >
                  <a href={project.link} target="_blank" className="relative">
                    <Image src={project.img} alt={project.alt} className="cursor-pointer" />
                    <div
                      className="absolute bottom-0 left-0 right-0 top-0 opacity-0 hover:opacity-100"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.1)" }}
                    ></div>
                  </a>
                  <div className="p-4 text-gray-700">
                    <h3 className="border-b-2 border-slate-400 text-2xl pb-2 mb-2">{project.name}</h3>
                    <p>{project.p}</p>

                    <a className="flex items-center py-5 group" href={project.link} target="_blank">
                      <MdKeyboardArrowRight className="bg-slate-500 text-white rounded-full h-5 w-5 mr-2 group-hover:bg-slate-400" />
                      <p className="font-bold text-gray-500 group-hover:text-gray-400">Click Here To View</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-me pb-5">
            <h3 className="text-indigo-700 text-3xl lg:text-4xl py-1 dark:text-white mb-8">Contact Me</h3>
            <div className="pb-3 text-slate-600 dark:text-white">
              {contacts.map((contact, index) => (
                <div className="flex items-center mb-5" key={index}>
                  <span className="text-3xl mr-3">{contact.icon}</span>
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
}

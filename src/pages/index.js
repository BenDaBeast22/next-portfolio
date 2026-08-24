import Head from "next/head";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import profilePic from "../../public/profilePic.jpg";
import multiplayerCribbs from "../../public/multiplayerCribbs.png";
import multiplayerChess from "../../public/multiplayerChess.png";
import utaLearn from "../../public/utaLearn.png";
import faveVault from "../../public/faveVault.png";
import { useEffect, useRef, useState } from "react";

const resumeLink = "Ben Critoph Tech Resume.pdf";

const worktermReportLinks = [
  { name: "camis_summer.md", link: "https://bendabeast22.github.io/UoG-Work-Term-Report-S24/" },
  { name: "camis_winter.md", link: "https://bendabeast22.github.io/UoG-Work-Term-Report-W24/" },
  { name: "brock_solutions.md", link: "https://bendabeast22.github.io/UoG-Work-Term-Report-S22/" },
  { name: "hatch.md", link: "https://bendabeast22.github.io/UoG-Work-Term-Report-W21/" },
];

const contacts = [
  { icon: <AiFillMail />, name: "bencritoph@gmail.ca", link: "mailto:bencritoph@gmail.ca" },
  { icon: <AiFillGithub />, name: "github.com/BenDaBeast22", link: "https://github.com/BenDaBeast22" },
  {
    icon: <AiFillLinkedin />,
    name: "linkedin.com/in/benjamin-critoph",
    link: "https://www.linkedin.com/in/benjamin-critoph/",
  },
];

const projects = [
  {
    name: "Japanese Song Learning App",
    file: "utaLearn.tsx",
    accent: "var(--accent-blue)",
    p: "An interactive Japanese lyric-based language learning app built with Next.js, TypeScript, React, and Supabase. Features real-time synchronized playback, dynamic lyric display modes (Kanji, Furigana, Romaji), and tokenized lyrics with instant dictionary readings, conjugations, and vocabulary saving. Users can also upload custom tracks for automated lyric synchronization, tokenization, and translation.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    img: utaLearn,
    alt: "Japanese Lyric Based Learning app",
    link: "https://uta-learn.vercel.app/",
  },
  {
    name: "Multiplayer Cross Cribbs Game",
    file: "crossCribbs.ts",
    accent: "var(--accent-green)",
    p: "A responsive multiplayer cross cribbs app developed using TypeScript. I used React for the frontend framework, Node for the game server and Socket.IO for multiplayer functionality. Users can play Cross Cribbs locally or multiplayer 1v1 or 2v2 in teams. In multiplayer, users can host or join a game room to play together.",
    tech: ["TypeScript", "Node.js", "Socket.IO"],
    img: multiplayerCribbs,
    alt: "Multiplayer cross cribbs game image",
    link: "https://crosscribbs-multiplayer.onrender.com/",
  },
  {
    name: "Collection Listing Website",
    file: "faveVault.jsx",
    accent: "var(--accent-peach)",
    p: "A responsive CRUD website created using React and Firebase where users can save their bookmarks, images, lists and rankings in collections. Users can add friends to share their collections. Firebase handles authentication, data storage, and security rules. This app is meant to be an organization hub for quick access to things that you love.",
    tech: ["React", "Firebase"],
    img: faveVault,
    alt: "Bookmark saving site image",
    link: "https://favevault-35283.web.app/",
  },
  {
    name: "Multiplayer Chess Game",
    file: "chess.js",
    accent: "var(--accent-mauve)",
    p: "A responsive multiplayer chess app created using React and Node.js where users can quickly start a chess game by sending a link to their opponents. Players can communicate via chat or video call, implemented with web sockets. The chess logic API was written by me. Note it takes about 30 seconds to start up since it's deployed on the free tier.",
    tech: ["React", "Node.js", "WebSockets"],
    img: multiplayerChess,
    alt: "Multiplayer chess game image",
    link: "https://multiplayer-chess.onrender.com/",
  },
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Firebase", "Supabase"];

// Reveals children with a fade + rise once they scroll into view.
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// Types text out character-by-character, like a terminal.
function useTypedText(text, speed = 55, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 90} className="group">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="block h-full rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          backgroundColor: "var(--bg-alt)",
          borderColor: "var(--border)",
          outlineColor: project.accent,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.accent)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      >
        {/* fake editor tab bar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b text-xs font-['JetBrains_Mono']"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="flex items-center gap-2" style={{ color: "var(--text-dim)" }}>
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: project.accent }} />
            {project.file}
          </span>
          <FiArrowUpRight
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--text-dim)" }}
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={project.img}
            alt={project.alt}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(180deg, transparent 40%, ${project.accent}22 100%)`,
            }}
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>
            {project.name}
          </h3>
          <p className="text-sm leading-6 mb-4" style={{ color: "var(--text-dim)" }}>
            {project.p}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-['JetBrains_Mono'] px-2 py-1 rounded-md"
                style={{
                  color: project.accent,
                  backgroundColor: `${project.accent}1a`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(null);
  const { displayed: typedName, done: nameDone } = useTypedText("Benjamin Critoph");

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

  return (
    <>
      {darkMode !== null && (
        <App darkMode={darkMode} toggleTheme={toggleTheme} typedName={typedName} nameDone={nameDone} />
      )}
    </>
  );
}

function App({ darkMode, toggleTheme, typedName, nameDone }) {
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ben Critoph Portfolio</title>
      </Head>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap");

        :root {
          --bg: #eff1f5;
          --bg-alt: #e6e9ef;
          --text: #4c4f69;
          --text-dim: #6c6f85;
          --border: #ccd0da;
          --accent-mauve: #8839ef;
          --accent-green: #40a02b;
          --accent-blue: #1e66f5;
          --accent-peach: #fe640b;
        }
        .dark {
          --bg: #1e1e2e;
          --bg-alt: #24243a;
          --text: #cdd6f4;
          --text-dim: #949cbb;
          --border: #33334d;
          --accent-mauve: #cba6f7;
          --accent-green: #a6e3a1;
          --accent-blue: #89b4fa;
          --accent-peach: #fab387;
        }
        body {
          background-color: var(--bg);
          transition: background-color 0.3s ease;
          font-family: "Inter", sans-serif;
        }
        ::selection {
          background-color: var(--accent-mauve);
          color: var(--bg);
        }
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: var(--bg);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 6px;
        }
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.05);
          }
        }
        @keyframes fadeInUpLocal {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        .blob {
          animation: float 12s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-blink,
          .blob {
            animation: none !important;
          }
        }
      `}</style>

      <main
        className="min-h-screen px-6 sm:px-12 lg:px-32 xl:px-48 transition-colors duration-300"
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        {/* NAV */}
        <nav className="py-8 flex items-center justify-between">
          <span className="font-['JetBrains_Mono'] text-sm" style={{ color: "var(--text-dim)" }}>
            ben<span style={{ color: "var(--accent-mauve)" }}>@</span>portfolio
            <span style={{ color: "var(--accent-green)" }}>:~$</span>
          </span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="h-9 w-9 flex items-center justify-center rounded-full border transition-all duration-300 hover:rotate-12 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ borderColor: "var(--border)", color: "var(--accent-peach)", outlineColor: "var(--accent-peach)" }}
          >
            {darkMode ? <BsFillMoonStarsFill /> : <BsSunFill />}
          </button>
        </nav>

        {/* HERO */}
        <section className="relative mb-10 md:mb-28 pt-6">
          {/* ambient blobs */}
          <div
            className="blob absolute -top-10 -left-16 h-64 w-64 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: "var(--accent-blue)" }}
          />
          <div
            className="blob absolute top-20 right-0 h-72 w-72 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: "var(--accent-mauve)", animationDelay: "3s" }}
          />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            {/* terminal window */}
            <Reveal>
              <div
                className="rounded-xl border shadow-2xl overflow-hidden"
                style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs font-['JetBrains_Mono']" style={{ color: "var(--text-dim)" }}>
                    zsh — ben@critoph
                  </span>
                </div>

                <div className="p-6 sm:p-8 font-['JetBrains_Mono'] text-sm sm:text-base leading-8">
                  <p>
                    <span style={{ color: "var(--accent-green)" }}>$</span> whoami
                  </p>
                  <p className="text-2xl sm:text-4xl font-semibold my-2" style={{ color: "var(--text)" }}>
                    {typedName}
                    <span className="cursor-blink" style={{ color: "var(--accent-mauve)" }}>
                      _
                    </span>
                  </p>
                  <p style={{ color: "var(--text-dim)" }}>
                    <span style={{ color: "var(--accent-peach)" }}>#</span> Software Developer · CS Co-op &apos;25 Grad
                  </p>

                  {nameDone && (
                    <div className="mt-6 opacity-0 animate-[fadeInUpLocal_0.6s_ease_forwards]">
                      <p>
                        <span style={{ color: "var(--accent-green)" }}>$</span> cat about.md
                      </p>
                      <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--text-dim)" }}>
                        Computer Science new grad looking for a full-time Software Developer role. I like building
                        multiplayer, real-time things.
                      </p>
                      <p className="mt-4">
                        <span style={{ color: "var(--accent-green)" }}>$</span> ls stack/
                      </p>
                      <p className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                        {stack.map((s, i) => (
                          <span key={s}>
                            <span style={{ color: "var(--accent-blue)" }}>&quot;{s}&quot;</span>
                            {i < stack.length - 1 ? <span style={{ color: "var(--text-dim)" }}>,</span> : null}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* portrait */}
            <Reveal delay={150} className="flex flex-col items-center gap-6">
              <div className="relative mx-auto">
                <div
                  className="absolute -inset-2 rounded-full border-2 border-dashed motion-safe:animate-[spin_20s_linear_infinite]"
                  style={{ borderColor: "var(--accent-blue)" }}
                />
                <div
                  className="relative h-52 w-52 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-4"
                  style={{ "--tw-ring-color": "var(--bg-alt)" }}
                >
                  <Image src={profilePic} alt="Portrait of Benjamin Critoph" />
                </div>
                <span
                  className="absolute -bottom-2 -right-2 font-['JetBrains_Mono'] text-[11px] px-2 py-1 rounded-md border"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    borderColor: "var(--border)",
                    color: "var(--accent-green)",
                  }}
                >
                  avatar.png
                </span>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <a
                  href={resumeLink}
                  download="resume"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-['JetBrains_Mono'] text-sm text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: "var(--accent-mauve)", outlineColor: "var(--accent-mauve)" }}
                >
                  <span>./resume.pdf</span>
                  <FiDownload className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>

                <div className="flex flex-wrap gap-2">
                  {worktermReportLinks.map((wt, index) => (
                    <a
                      key={index}
                      href={wt.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-['JetBrains_Mono'] px-3 py-2 rounded-md border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-dim)",
                        outlineColor: "var(--accent-blue)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--accent-blue)";
                        e.currentTarget.style.borderColor = "var(--accent-blue)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-dim)";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}
                    >
                      &gt; {wt.name}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-10 md:mb-28">
          <Reveal>
            <p className="font-['JetBrains_Mono'] text-sm mb-2" style={{ color: "var(--accent-green)" }}>
              $ ls ~/projects
            </p>
            <h3 className="text-3xl lg:text-4xl font-semibold mb-10" style={{ color: "var(--text)" }}>
              Selected Work
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="pb-10 md:pb-20">
          <Reveal>
            <p className="font-['JetBrains_Mono'] text-sm mb-2" style={{ color: "var(--accent-green)" }}>
              $ contact --list
            </p>
            <h3 className="text-3xl lg:text-4xl font-semibold mb-10" style={{ color: "var(--text)" }}>
              Let&apos;s Build Something
            </h3>
          </Reveal>

          <div className="flex flex-col gap-4">
            {contacts.map((contact, index) => (
              <Reveal delay={index * 80} key={index}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 font-['JetBrains_Mono'] text-base sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                  style={{ color: "var(--text)", outlineColor: "var(--accent-mauve)" }}
                >
                  <span style={{ color: "var(--accent-green)" }}>$</span>
                  <span className="text-xl" style={{ color: "var(--accent-mauve)" }}>
                    {contact.icon}
                  </span>
                  <span className="relative">
                    {contact.name}
                    <span
                      className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: "var(--accent-mauve)" }}
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <p className="mt-16 font-['JetBrains_Mono'] text-xs" style={{ color: "var(--text-dim)" }}>
              {"// built with Next.js & Tailwind"}
              <span className="cursor-blink" style={{ color: "var(--accent-green)" }}>
                _
              </span>
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

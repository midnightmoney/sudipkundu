import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Layout } from "../components/PageLayout";

const projectsDB = [
  {
    name: "CobraStore",
    description: "CobraStore is an eCommerce app for book lovers",
    tech: [
      {
        name: "ReactJS",
        isNew: false,
      },
      {
        name: "React Context API",
        isNew: true,
      },
      {
        name: "React Router v6",
        isNew: false,
      },
      {
        name: "My own component library",
        isNew: false,
      },
      {
        name: "Mock backend",
        isNew: false,
      },
    ],
    features:
      "Sort & Filter, Wishlist, Cart, Address, Order management, Authentication, Payment Integration",
    github: "https://github.com/sudipkundu999/CobraStore-React",
    live: "https://cobra-store.netlify.app/",
  },
  {
    name: "CobraTube",
    description: "CobraTube is an video library app inspired by YouTube",
    tech: [
      {
        name: "ReactJS",
        isNew: false,
      },
      {
        name: "Redux Toolkit",
        isNew: true,
      },
      {
        name: "React Router v6",
        isNew: false,
      },
      {
        name: "My own component library",
        isNew: false,
      },
      {
        name: "Mock backend",
        isNew: false,
      },
    ],
    features:
      "Search, Like, History, Watch Later, Playlist management, Authentication, Infinite scroll",
    github: "https://github.com/sudipkundu999/CobraTube",
    live: "https://cobra-tube.netlify.app/",
  },
  {
    name: "CobraTabs",
    description:
      "CobraTabs is a chrome extension inspired by Momentum to personalize new tabs",
    tech: [
      {
        name: "ReactJS",
        isNew: false,
      },
      {
        name: "Vanilla CSS",
        isNew: false,
      },
      {
        name: "OpenWeatherAPI",
        isNew: true,
      },
      {
        name: "UnsplashAPI",
        isNew: true,
      },
    ],
    features:
      "Shows the Time, Weather, Main focus, To-do list, new quote & background image on new tabs",
    github: "https://github.com/sudipkundu999/cobra-chrome-extension",
    live: "https://chrome.google.com/webstore/detail/cobra-tabs/jghgbgogbpnhgobhdlkdbkocahgllpll/",
  },
  {
    name: "CobraQuiz",
    description: "CobraQuiz is a quiz app to test web dev knowledge",
    tech: [
      {
        name: "ReactJS",
        isNew: false,
      },
      {
        name: " React Context API",
        isNew: false,
      },
      {
        name: " React Router",
        isNew: false,
      },
      {
        name: " My own component library",
        isNew: false,
      },
      {
        name: "Firebase",
        isNew: true,
      },
    ],
    features:
      "Search, Category based quizzes, User profile page, Authentication, Light & Dark Mode.",
    github: "https://github.com/sudipkundu999/CobraQuiz",
    live: "https://cobra-quiz.netlify.app/",
  },
  {
    name: "CobraUI",
    description: "CobraUI is my own component library to build UI faster",
    tech: [
      {
        name: "HTML",
        isNew: true,
      },
      {
        name: "Vanilla CSS",
        isNew: true,
      },
    ],
    features:
      "Alerts, Avatars, Badge, Buttons, Cards, Modal, Inputs, Navigation, Rating, Toasts",
    github: "https://github.com/sudipkundu999/CobraUI",
    live: "https://cobra-ui.netlify.app/",
  },
];

const ProjectCard = ({ project }) => {
  const { name, description, tech, features, github, live } = project;
  return (
    <div className="flex flex-col border pt-3 px-5 rounded-xl">
      <div className="relative w-full h-48 350px:h-64 550px:h-80 666px:h-96 mx-auto overflow-hidden">
        <Image
          src={`/projects/${name.toLowerCase()}.jpg`}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className="text-cyan-600 font-bold text-xl 500px:text-lg">{name}</h2>
      <h3 className="text-sm mb-2">
        {tech.map((item, i) => (
          <span key={i} className={item.isNew ? "font-semibold" : ""}>
            {item.name}
            {i === tech.length - 1 ? "." : ", "}
          </span>
        ))}
      </h3>
      <article>
        {description}. <br />
        <span className="font-semibold">Features</span> : {features}.
      </article>
      <span className="flex flex-row gap-4 m-auto my-1.5">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-semibold rounded-full text-base px-3 py-1 text-center mr-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-600 dark:focus:ring-cyan-800 transition-colors duration-300">
            View Source
          </button>
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-full text-base px-3 py-1 text-center mr-2 mb-2 transition-colors duration-300">
            Live Project
          </button>
        </a>
      </span>
    </div>
  );
};

const projects = () => {
  return (
    <Layout>
      <Head>
        <title>Sudip Kundu | Projects</title>
      </Head>
      <h1 className="font-bold text-2xl text-cyan-600">Projects</h1>
      Over the past 6 months I have been learning web dev and applying my
      knowledge to build projects.
      <div className="flex flex-col gap-4 my-4">
        {projectsDB.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Layout>
  );
};

export default projects;

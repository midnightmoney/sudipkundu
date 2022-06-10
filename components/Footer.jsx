import React from "react";

const Footer = () => {
  return (
    <footer className="border-t px-1 pt-1 350px:p-4 font-normal text-lg flex flex-col flex-wrap justify-between items-center gap-x-1 500px:flex-row text-center">
      <div>
        © 2022, Built with
        <span className="font-medium text-cyan-600"> NextJs </span>
        and
        <span className="font-medium text-cyan-600"> Tailwind </span>
      </div>
      <nav>
        <ul className="text-2xl cursor-pointer flex gap-5 transition-all text-slate-600">
          <li className="hover:text-cyan-600">
            <a
              href="https://github.com/sudipkundu999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li className="hover:text-cyan-600">
            <a
              href="https://www.linkedin.com/in/sudip-kundu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
          <li className="hover:text-cyan-600">
            <a href="mailto:sudipkundu999@gmail.com">
              <i className="fa-solid fa-envelope" />
            </a>
          </li>
          <li className="hover:text-cyan-600">
            <a
              href="http://twitter.com/sudipkundu999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

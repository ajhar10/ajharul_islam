import React from "react";
import aj from "../../assets/images/aj.png";
import "./Home.css";
import Typed from "react-typed";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="top-content flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/3">
          <div>
            <p
              data-aos="fade-down-right"
              data-aos-duration="1000"
              className="uppercase text-left text-xs lg:text-sm text-accent"
            >
              Welcome To My World
            </p>
            <p
              data-aos="fade-down-right"
              yarn
              start
              data-aos-duration="1000"
              className="uppercase font-semibold my-7 text-left text-3xl lg:text-6xl text-white leading-snug"
            >
              Hi, I'm <span className="text-secondary">Ajharul Islam</span>
              <br />
              <span>
                <Typed
                  strings={[
                    "A Mern Developer",
                    "A Frontend Developer",
                    "A Backend Developer",
                    "A React.JS Developer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>
            <p
              data-aos="fade-down-right"
              data-aos-duration="1000"
              className="text-left text-base text-accent w-full lg:w-[60ch]"
            >
              Hi, I am a Passionate web app developer.And I can build your website as you want.
              <br />
              <br />
              Creative problem solver with demonstrated ability to work on
              multiple projects simultaneously.Positive driven and confident
              individual with an apt for learning new technology.{" "}
            </p>
          </div>
          <div className="flex gap-5 my-10 -mb-20">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <a
                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                href="https://drive.google.com/file/d/1KkpavV22fNKzc8l5bM0qZD4pb2gmTt4S/view"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000">
              <Link
                smooth
                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                to="/landing#contact"
              >
                Hire me
              </Link>
            </div>
          </div>
          <div className="text-accent flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
            <div>
              <h5
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-left mb-3 uppercase tracking-wide"
              >
                Find Me
              </h5>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-5"
              >
                <a
                  href="https://github.com/ajhar10"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ajhar-rimon41/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/ajhar.rimon.927"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h5
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-left mb-3 uppercase tracking-wide"
              >
                Best skills
              </h5>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-5"
              >
                <div className="action-box text-blue-500">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="action-box text-yellow-500">
                  <i className="fa-brands fa-js-square"></i>
                </div>
                <div className="action-box text-blue-500">
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="image w-[22rem] lg:w-[32rem] h-[25rem] lg:h-[35rem] flex justify-end bg-white relative mb-20 -mt-8 lg:mt-0"
        >
          <img className="absolute bottom-0" src={aj} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

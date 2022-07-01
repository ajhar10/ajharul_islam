import React from "react";
import ProjectCard from "./ProjectCard";
import next_shop from "../../assets/images/f.png";
import tirez from "../../assets/images/TirezEntire.png";
import fitness from "../../assets/images/fitness.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Next Shop",
      name: "Manufacturer Company Web App",
      image: next_shop,
      links: {
        live: "https://next-shop-4994a.web.app/",
        client: "https://github.com/ajhar10/next-shop-client-site",
        server: "https://github.com/ajhar10/next-shop-server",
      },
    },
    {
      id: 2,
      title: "Tirez",
      name: "Stock Control And Product Management Website",
      image: tirez,
      links: {
        live: "https://tirez-bfac7.web.app/",
        client: "https://github.com/ajhar10/tirez-client-site",
        server: "https://github.com/ajhar10/tirez-server-site",
      },
    },
    {
      id: 3,
      title: "Fitness Blender",
      name: "Body Buildup and Helth Concern Site",
      image: fitness,
      links: {
        live: "https://fitness-blender-d10c8.web.app/",
        client: "https://github.com/ajhar10/fitness-blender",
        server: "https://github.com/ajhar10/fitness-blender",
      },
    },
  ];

  return (
    <div id="portfolio" className="text-white max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
          My Full Stack Projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

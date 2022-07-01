import React from "react";
import { useParams } from "react-router-dom";
import next_shop from "../../assets/images/f.png";
import tirez from "../../assets/images/TirezEntire.png";
import fitness from "../../assets/images/fitness.png";
import { useEffect } from "react";
import { useState } from "react";
import "./PorjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  const projects = [
    {
      id: 1,
      title: "Next Shop",
      name: "Manufacturer Company Web App",
      description: [
        "This site includes a firebase email-password-based and google authentication system.",
        "This site has different features for different roles. There is two role admin and user.",
        "You can pay using your credit card.",
        "For an admin role user there in the dashboard he can cancel any unpaid order . make other admin and my profile page.",
        "This site is protected using JsonWebToken",
      ],
      image: next_shop,
      links: {
        live: "https://next-shop-4994a.web.app/",
        client: "https://github.com/ajhar10/next-shop-client-site",
        server: "https://github.com/ajhar10/next-shop-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
        "Stripe",
      ],
    },
    {
      id: 2,
      title: "Tirez",
      name: "Stock Control And Product Management Website",
      description: [
        "User can maintain their products in all aspects.",
        "User can store their product information in the database.",
        "User Can update stocks and also can add product , and can remove products.",
        "You can see user reviews . what they think about us and how they feel.",
        "Here You can see all our team members and how many companies inventory we manage.",
      ],
      image: tirez,
      links: {
        live: "https://tirez-bfac7.web.app/",
        client: "https://github.com/ajhar10/tirez-client-site",
        server: "https://github.com/ajhar10/tirez-server-site",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
      ],
    },
    {
      id: 3,
      title: "Fitness Blender",
      name: "Body Buildup and Helth Concern Site",
      description: [
        "Here people can donate blood and can take blood when needed.",
        "Here You can search blood based on blood group.",
        "You can see who needs blood in your area.",
        "This site is protected using JsonWebToken",
        "An user cannot donate twice in 3 months",
      ],
      image: fitness,
      links: {
        live: "https://fitness-blender-d10c8.web.app/",
        client: "https://github.com/ajhar10/fitness-blender",
        server: "https://github.com/ajhar10/fitness-blender",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
        "Stripe",
      ],
    },
  ];

  useEffect(() => {
    const project = projects.find((x) => x.id === +id);
    setProject(project);
  }, [id]);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="detail-card lg:min-h-screen p-5 lg:p-40 hover:text-white"
    >
      <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[70vh] text-left mb-32">
        <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
          <div>
            <h2 className="font-semibold text-sm my-2 text-secondary">
              {project.title}
            </h2>
            <h2 className="project-title text-accent font-semibold text-xl my-4">
              {project.name}
            </h2>
            <div className="my-4">
              <h3 className=" text-secondary">Project Overview</h3>
              {project?.description?.map((point, index) => (
                <p key={index} className="text-accent">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
            {/* <div className="my-5">
              <h3 className=" text-secondary">Technology used</h3>
              <div className="flex flex-wrap gap-4">
                {project?.technology?.map((point, index) => (
                  <span key={index} className="text-accent hover:none btn">
                    {point}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
          <div className="button-content flex justify-between mt-5">
            <a
              href={project?.links?.live}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={project?.links?.client}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
            <a
              href={project?.links?.server}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              {" "}
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Server Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

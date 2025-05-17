import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Explore India",
    year: "Mar2024",
    align: "right",
    image: "/website-img-1 (2).jpg",
    link: "https://exploreind.vercel.app/",
  },
  {
    name: "Expanding Express",
    year: "Sept2024",
    align: "left",
    image: "/website-img-2 (2).webp",
    link: "https://exp-express.vercel.app/",
  },
  {
    name: "Hotel Food Management",
    year: "Apr2025",
    align: "right",
    image: "/website-img-3 (2).jpg",
    link: "https://hotel-invsys.vercel.app/",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

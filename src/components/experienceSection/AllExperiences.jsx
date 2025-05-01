import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Explore INDIA",
    company: "",
    date: "2024 - Present",
    responsibilities: [
      "Developed and maintained a travel-based web platform using the MERN stack.",
      "Built reusable React components for booking, user authentication, and location-based content.",
      "Optimized performance and responsiveness for users across devices.",
      
    ],
  },
  {
    job: "Expanding Express",
    company: "",
    date: "2024 - Present",
    responsibilities: [
      "Taught core backend concepts using Express.js, MongoDB, and Node.js.",
      "Mentored students on building RESTful APIs and full-stack applications.",
      "Provided personalized code reviews and weekly assignment evaluations.",
      
    ],
  },
  {
    job: "Hotel Management System",
    company: "",
    date: "2025 - Present",
    responsibilities: [
      "Designed and implemented a food inventory and order management system using React and MongoDB.",
      "Created a multi-role UI for waiters and connected hotels to manage orders efficiently.",
     
      
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Pradip, a MERN stack developer with a passion for building modern web applications and sharing knowledge. I specialize in React and full-stack development, helping others understand real-world project workflows and best practices. I also enjoy creating content and tutorials to support aspiring developers on their journey into tech. Outside of coding, I’m driven by continuous learning and love inspiring others to grow in their careers.

      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-[#15d1e9] transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white  transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

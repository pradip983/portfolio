import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center h-[300px] w-[300px]"
    >
      {/* Rotating Dashed SVG Circle */}
      <motion.svg
        className="absolute"
        width="330"
        height="330"
        viewBox="0 0 330 330"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Slow rotation
      >
        <circle
          cx="165"
          cy="165"
          r="160"
          fill="none"
          stroke="#06b6d4" // cyan color
          strokeWidth="2"
          strokeDasharray="20 25" // dash length and gap
        />
      </motion.svg>

      {/* Profile Image */}
      <div className="relative h-[280px] w-[280px] rounded-full overflow-hidden z-10 border-2 border-gray-700">
        <img
          src="/HexaPic (2).png"
          alt="Profile"
          className="object-cover h-full w-full"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;

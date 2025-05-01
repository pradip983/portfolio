import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="  ">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] h-[80vh] lg:h-screen mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;

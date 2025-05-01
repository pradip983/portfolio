import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/pradip-vasan-0159732b5/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/pradip983" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/v_a_s_a_n_1/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;

// import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" />*/}
         <h5 className="mx-2 w-10  font-bold">BG</h5>
      </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/balaguru-g-673627265/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Balaguru588" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          {/* <a href="https://leetcode.com/u/Ragav_R/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a> */}
         <a href="https://www.instagram.com/b_a_l._.a_/" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a>
        </div> 

    </nav>
  )
}

export default Navbar


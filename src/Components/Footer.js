
import {
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <ul className="contact">
    <a href="#">
      <li>
        <FaPhoneAlt size="1.5em" /> +254 723232323
      </li><br></br>
    </a>
    <a href="#">
      <li>
        <FaInstagram size="1.5em" /> @YourFitnessPal
      </li>
    </a> <br></br>
    <a href="#">
      <li>
        <FaFacebook size="1.5em" /> @YourFitnessPal
      </li>
    </a>
  </ul>
    )
}
export default Footer;
import Divider from "./Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="px-10">
      <div className="py-8">
        <Divider />
        <h4 className="text-[1.4rem] font-bold mt-4">Contact Us</h4>
        <address className="not-italic py-2">
          2897 Passaqua Rd.
          <br />
          Chester, MT 59522
          <br />
          <a
            href="tel:406.222.0022"
            className="hover:text-red-600 transition-all font-semibold"
          >
            406.222.0022
          </a>
          <br />
          <a
            href="email:chop@thechophouse.dev"
            className="hover:text-red-600 transition-all font-semibold"
          >
            chop@thechophouse.dev
          </a>
        </address>
      </div>
      <div className="pb-8">
        <h4 className="text-[1.4rem] font-bold">Follow Us</h4>
        <div className="flex gap-6 py-2 pb-8">
          <a
            href="https://www.instagram.com/lobi_software_studio/"
            target="_blank"
            className="w-6"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#000"
              className="hover:text-red-600"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/benjohnsonfullstack/"
            target="_blank"
            className="w-6"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#000"
              className="hover:text-red-600"
            />
          </a>
        </div>
        <Divider />
      </div>
    </footer>
  );
};

export default Footer;
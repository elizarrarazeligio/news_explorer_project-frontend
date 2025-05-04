import "@/styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer flex py-[32px] px-[104px]">
      <span className="footer__copyright">
        &#169; 2025 Eligio Elizarraraz Molina
      </span>
      <div className="footer__links flex">
        <Link href="/" className="footer__link">
          Inicio
        </Link>
        <Link href="/#about" className="footer__link">
          Acerca
        </Link>
        <ul className="footer__social flex">
          <li className="footer__social-link">
            <div></div>
            <Link href="https://github.com/elizarrarazeligio" target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li className="footer__social-link">
            <Link
              href="https://www.instagram.com/elizarrarazeligio/"
              target="_blank"
            >
              <RiInstagramFill />
            </Link>
          </li>
          <li className="footer__social-link">
            <Link
              href="https://www.linkedin.com/in/elizarrarazeligio/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

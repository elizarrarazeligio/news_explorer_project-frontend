import { ReactNode } from "react";
import {
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiMysql, SiMongodb } from "react-icons/si";
import "@/styles/slider.css";

export default function Slider() {
  const technologies: { name: string; icon: ReactNode }[] = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  return (
    <section className="slider flex">
      <div className="slider__container flex w-full my-[20px]">
        <ul className="slider__lane flex">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="slider__item mx-[25px] flex items-center justify-center"
            >
              {tech.icon}
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className="slider__lane flex">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="slider__item mx-[25px] flex items-center justify-center"
            >
              {tech.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

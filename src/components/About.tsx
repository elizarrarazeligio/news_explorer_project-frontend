import "@/styles/about.css";
import { robotoSlab } from "@/vendor/fonts";
import Image from "next/image";
import Slider from "./Slider";

export default function About() {
  return (
    <section id="about" className="about flex px-[104px] py-[80px]">
      <Image
        src="/aboutme.jpg"
        width={464}
        height={464}
        alt="Profile picture"
        className="about__photo rounded-full"
      />
      <div className="about__info flex flex-col w-[600px] pt-[30px]">
        <h3 className={`about__title ${robotoSlab.className}`}>
          Acerca del autor
        </h3>
        <div className="about__description">
          <p>
            Mi nombre es <strong>Eligio Elizarraraz Molina</strong> y como
            profesionista dentro del área de ingeniería y entusiasta hacia el
            mundo tecnológico, me encuentro continuamente en la búsqueda de
            soluciones a desafíos del día a día.
            <br />
            <br />
            Mi experiencia incluye el desarrollo de aplicaciones web con diseño
            adaptativo, abarcando tanto el <strong>Front End</strong> como el{" "}
            <strong>Back End</strong>.
            <br />
            <br />
            Algunas de las tecnologías con las que he trabajado son:
          </p>
          <Slider />
        </div>
      </div>
    </section>
  );
}

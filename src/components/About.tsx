import "@/styles/about.css";
import { robotoSlab } from "@/vendor/fonts";
import Image from "next/image";
import Slider from "./Slider";

export default function About() {
  return (
    <section className="about flex px-[104px] py-[80px]">
      <Image
        src="/about.jpg"
        width={464}
        height={464}
        alt="Profile picture"
        className="about__photo rounded-full"
      />
      <div className="about__info flex flex-col w-[600px] pt-[50px]">
        <h3 className={`about__title ${robotoSlab.className}`}>
          Acerca del autor
        </h3>
        <div className="about__description">
          <p>
            Este bloque describe al autor del proyecto. Aquí debe indicar tu
            nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
          </p>
          <Slider />
          <p>
            También puedes hablar de tu experiencia con Practicum, de lo que
            aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
          </p>
        </div>
      </div>
    </section>
  );
}

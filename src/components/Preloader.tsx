import "@/styles/preloader.css";

export default function Preloader() {
  return (
    <div className="preloader mx-auto flex flex-col text-center gap-[24px]">
      <i className="preloader__icon w-[74px] h-[74px] rounded-full"></i>
      <span className="preloader__text font-normal">Buscando noticias...</span>
    </div>
  );
}

import Preloader from "@/components/Preloader";
import NotFound from "@/components/NotFound";

export default function Main() {
  return (
    <main>
      <Preloader />
      <NotFound
        title="No se encontró nada"
        description="Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda."
      />
    </main>
  );
}

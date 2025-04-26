import Preloader from "@/components/Preloader";
import NotFound from "@/components/NotFound";
import Header from "@/components/Header";

export default function Main() {
  return (
    <main>
      <Header />
      <Preloader />
      <NotFound
        title="No se encontró nada"
        description="Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda."
      />
    </main>
  );
}

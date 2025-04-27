"use client";

import NotFound from "@/components/NotFound";
import { useRouter } from "next/navigation";
import "@/styles/notfound.css";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center relative">
      <NotFound
        title="404 | Página no encontrada"
        description="No se pudo encontrar la página solicitada."
      >
        <button
          type="button"
          className="not-found__button rounded-full py-3 px-6 bottom-60 mt-5 font-medium"
          onClick={() => router.back()}
        >
          Regresar
        </button>
      </NotFound>
    </div>
  );
}

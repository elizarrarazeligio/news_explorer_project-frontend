import "@/styles/search.css";
import { FormEvent } from "react";

export default function SearchBar({ setSearch }: { setSearch: Function }) {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearch(true);
  };

  return (
    <form
      className="searchbar flex w-full rounded-full h-[64px]"
      onSubmit={handleSearch}
    >
      <input
        className="searchbar__input h-full w-3/4 rounded-l-full px-[24px] font-normal"
        type="search"
        placeholder="Introduce un tema"
      />
      <button
        className="searchbar__button rounded-full h-full w-1/4 font-medium"
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
}

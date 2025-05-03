import "@/styles/search.css";
import { ChangeEvent, FormEvent } from "react";

interface SearchBarProps {
  query: string;
  setQuery: Function;
  handleSearch: (e: FormEvent<Element>) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const { query, setQuery, handleSearch } = props;

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setQuery(value);
  };

  return (
    <form
      className="searchbar flex w-full rounded-full h-[64px]"
      onSubmit={handleSearch}
    >
      <input
        className="searchbar__input h-full w-3/4 rounded-full px-[24px] font-normal"
        type="search"
        placeholder="Introduce un tema"
        value={query}
        onChange={handleChange}
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

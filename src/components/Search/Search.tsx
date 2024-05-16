import { useState, FC } from "react";

import style from "./Search.module.scss";

interface Props {
  onSearch: (input: string) => void;
}

const Search: FC<Props> = (props) => {
  const [inputValue, setInputvalue] = useState<string>("");

  return (
    <form className={style.search}>
      <input
        type="text"
        placeholder="Find me"
        required
        className={style.search__input}
        value={inputValue}
        onChange={(e) => {
          setInputvalue(e.target.value);
          props.onSearch(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setInputvalue("");
          props.onSearch("");
        }}
        className={`${style.search__button} ${style.search__button_clear}`}
      >
        Clear
      </button>
      {/* <button 
            type="submit" 
            className={`${style.search__button} ${style.search__button_find}`}
            >
            Find Person
            </button> */}
    </form>
  );
};

export default Search;

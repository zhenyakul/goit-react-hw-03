import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ onFilter, value }) {
  const inputId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.searchBox}
        type="text"
        id={inputId}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
        value={value}
      />
    </div>
  );
}

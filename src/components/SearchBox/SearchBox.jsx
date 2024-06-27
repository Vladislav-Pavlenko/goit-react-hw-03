import { useId } from "react";

export default function SearchBox({ filter, onFilter }) {
  const searchName = useId();
  return (
    <div>
      <label htmlFor={searchName}>Find contacts by name</label>
      <input
        type="text"
        name="searchName"
        id={searchName}
        value={filter}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}

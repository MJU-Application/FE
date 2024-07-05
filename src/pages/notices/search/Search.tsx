import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Search() {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <SearchBar value={value} setValue={setValue}></SearchBar>
    </div>
  );
}

export default Search;

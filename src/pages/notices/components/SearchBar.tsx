import styled from "styled-components";
import { SearchIcon } from "@/assets/svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
type SearchBarProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ value, setValue }: SearchBarProps) {
  const navigate = useNavigate();
  useEffect(() => {
    const handlePopState = () => {
      navigate("/notice");
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  function handleSubmit(e?: React.FormEvent<HTMLElement>) {
    e?.preventDefault();
    navigate(`?value=${value}`);
  }

  function activeEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }
  return (
    <Search>
      <div className="search_wrapper">
        <SearchIcon className="search_icon" width={18} height={18} />
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="공지 제목을 입력해주세요."
            onKeyDown={(e) => activeEnter(e)}
          />
        </form>
      </div>
    </Search>
  );
}

export default SearchBar;

const Search = styled.div`
  display: flex;
  justify-content: center;
  .search_wrapper {
    display: flex;
    align-items: center;
    background-color: rgba(101, 168, 245, 0.32);
    width: 35rem;
    height: 43px;
    border-radius: 1rem;
    margin-top: 1rem;
    padding-left: 1.2rem;
  }
  .form {
    flex-grow: 1;
  }
  .input {
    width: 100%;
    height: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: 1rem;
    &::placeholder {
      color: rgba(0, 0, 0, 0.22);
    }
  }
`;

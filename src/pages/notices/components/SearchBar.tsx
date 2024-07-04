import styled from "styled-components";

function SearchBar() {
  return (
    <Search>
      <input className="input" placeholder="검색어를 2글자 이상 입력하세요." />
    </Search>
  );
}

export default SearchBar;

const Search = styled.div`
  display: flex;
  justify-content: center;
  .input {
    margin-top: 25px;
    width: 30rem;
    height: 43px;
    padding: 0px 16px;
    background-color: rgba(200, 161, 114, 0.1);
    border: none;
    border-radius: 0.5rem;
    outline: none;
  }
`;

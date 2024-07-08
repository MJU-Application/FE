import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { SearchIcon } from "@/assets/svg";
import { useSearchNotice } from "@/hooks/api/useSearchNotice";
import NotcieCard from "@/pages/notices/components/NoticeCard";
function Search() {
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { data, isLoading } = useSearchNotice(keyword);
  const navigate = useNavigate();
  function handleSubmit(e?: React.FormEvent<HTMLElement>) {
    e?.preventDefault();
    setSearchParams(`keyword=${encodeURIComponent(value)}`);
  }

  useEffect(() => {
    const handlePopState = () => navigate("/notice");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  return (
    <>
      <SearchWrapper>
        <form onSubmit={handleSubmit} className="search_form">
          <SearchIcon className="search_icon" width={18} height={18} />
          <input
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="공지 제목을 입력해주세요."
            autoFocus
          />
        </form>
      </SearchWrapper>
      {isLoading
        ? null
        : data?.data.map((notice) => (
            <NotcieCard
              title={notice.title}
              date={notice.noticedAt}
              link={notice.link}
            ></NotcieCard>
          ))}
    </>
  );
}

export default Search;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  .search_form {
    display: flex;
    align-items: center;
    background-color: rgba(101, 168, 245, 0.32);
    width: 90%;
    height: 43px;
    border-radius: 1rem;
    margin-top: 1rem;
    padding-left: 1.2rem;
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

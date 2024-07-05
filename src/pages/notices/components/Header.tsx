import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchIcon } from "@/assets/svg";
function Header() {
  return (
    <>
      <Head>
        <div className="logo">로고</div>
        <Link to={"search"} className="searchIcon">
          <SearchIcon width={22} height={22} />
        </Link>
      </Head>
    </>
  );
}

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  .logo {
    font-size: 15px;
    font-weight: 600;
    padding: 0 1rem;
  }
  .searchIcon {
    margin-left: auto;
    padding: 0 1rem;
  }
`;
export default Header;

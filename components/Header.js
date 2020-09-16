import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import Nprogress from "nprogress";
import Router from "next/router";
import Cart from "./Cart";
import Search from "./Search";

Router.onRouteChangeStart = () => {
  Nprogress.start();
};

Router.onRouteChangeComplete = () => {
  Nprogress.done();
};

Router.onRouteChangeError;

const Logo = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;

  position: relative;
  font-weight: bold;
  display: flex;
  z-index: 2;
  a {
    margin-left: 0.6rem;
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.red};
    text-decoration: none;
  }
  /* @media (max-width: 1300px) {
    display: block;
    margin: 0;
    text-align: center;
  } */
`;

const SubLogo = styled.h1`
  transform: skew(-7deg);
  font-size: 3rem;
  margin-top: 0.8rem;
`;

const StyledHeader = styled.header`
  .bar {
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .subbar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <Nav />
    {/* <div style={{ maxWidth: "1248px" }} className="flex mt-6 mx-auto">
      <div className="flex-initial">
        <Link href="/">
          <Logo>
            <img
              width="38"
              height="38px"
              className="mt-2"
              src="https://i.imgur.com/K4SMB4S.png"
            />
            <SubLogo>
              <a>cropswap</a>
            </SubLogo>
          </Logo>
        </Link>
      </div>
      <div className="flex-grow ml-6">
        <Search />
      </div>
      <button className="ml-6 text-lg text-gray-500">Advanced</button>
    </div> */}
    <Cart />
  </StyledHeader>
);

export default Header;

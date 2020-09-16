import styled from "styled-components";

const NavStyles = styled.ul`
  /* display: flex;
  justify-content: flex-end; */
  /* font-size: 1.2rem; */
  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.brown};
    outline: none;
    /* @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    } */
    &:before {
      content: "";
      width: 2px;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      /* font-weight: bold; */
      &:after a {
        /* font-weight: bold; */
      }
      /* @media (max-width: 700px) {
        width: calc(100% - 10px);
      } */
    }
  }
  /* @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  } */
`;

export default NavStyles;

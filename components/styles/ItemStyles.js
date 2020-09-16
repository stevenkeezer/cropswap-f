import styled from "styled-components";

const Item = styled.div`
  background: ${(props) => props.theme.white};
  /* border: 3px solid ${(props) => props.theme.offWhite}; */
  box-shadow: ${(props) => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  flex: 1 0 0;

  img {
    width: auto;
    height: 250px;
    object-fit: cover;
    border-radius: 3px;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.2rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    /* border-top: 1px solid ${(props) => props.theme.lightgrey}; */
    grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
    grid-gap: 1px;
    /* background: ${(props) => props.theme.lightgrey}; */
    & > * {
      /* background: ${(props) => props.theme.offWhite};; */
      border-radius: 3px;
      color: "#399b60";
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default Item;

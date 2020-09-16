import Signup from "../components/Signup";
import Signin from "../components/Signin";
import RequestReset from "../components/RequestReset";

import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = (props) => (
  <>
    <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-col justify-center flex-1">
      Signin
      <br></br>
      <Signin />
      <br></br>
      Sign up
      <br></br>
      <Signup />
      <br></br>
      RESET REQUEST
      <br></br>
      <RequestReset />
    </div>
  </>
  // <Columns>
  //   <Signup />
  //   <Signin />
  // </Columns>
);

export default SignupPage;

import PleaseSignIn from "../../components/PleaseSignIn";
import Dashboard from "../../components/Dashboard";

const Summary = (props) => (
  <div>
    <PleaseSignIn>
      <Dashboard />
    </PleaseSignIn>
  </div>
);

export default Summary;

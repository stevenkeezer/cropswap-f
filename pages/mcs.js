import PleaseSignIn from "../components/PleaseSignIn";
import Dashboard from "../components/Dashboard";

const myCropSummaryPage = (props) => (
  <div>
    <PleaseSignIn>
      <Dashboard />
    </PleaseSignIn>
  </div>
);

export default myCropSummaryPage;

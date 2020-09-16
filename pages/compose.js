import CreateItem from "../components/CreateItem";
import PleaseSignIn from "../components/PleaseSignIn";

const Compose = (props) => (
  <div>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Compose;

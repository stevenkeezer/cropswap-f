// import CreateItem from "../components/CreateItem";
import Reset from "../components/Reset";

const ResetPage = (props) => (
  <div>
    <p class="py-12">Reset Your Password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;

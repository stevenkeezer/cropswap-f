import PleaseSignIn from "../components/PleaseSignIn";
import CartFull from "../components/CartFull";

const CartFullPage = (props) => (
  <div>
    <PleaseSignIn>
      <CartFull id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default CartFullPage;

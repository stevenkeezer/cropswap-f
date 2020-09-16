import OrderList from "../components/OrderList";
import Footer from "../components/Footer";
import PleaseSignIn from "../components/PleaseSignIn";

const OrderPage = (props) => (
  <div>
    <PleaseSignIn>
      <OrderList />
      <Footer />
    </PleaseSignIn>
  </div>
);

export default OrderPage;

import { useCart } from "./LocalState";
import { useUser } from "./User";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import CloseButton from "./styles/CloseButton";
import TakeMyMoney from "./TakeMyMoney";
import CartItem from "./CartItem";
import calcTotalPrice from "../lib/calcTotalPrice";
import formatMoney from "../lib/formatMoney";
import SickButton from "./styles/SickButton";
import Checkout from "./Checkout";

function Cart() {
  const me = useUser();
  const { cartOpen, toggleCart } = useCart();
  if (!me) return <p>not logged in</p>;
  console.log("me.cart", me.cart);
  return (
    <CartStyles open={cartOpen} data-testid="cart">
      <header>
        <div
          onClick={toggleCart}
          title="close"
          class="flex justify-between items-center py-5 px-8"
        >
          <div class="text-4xl font-bold text-gray-900">My basket</div>
          <div class="border border-green-600 rounded-full px-8 py-3 flex">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="x w-8 h-8 text-green-700"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-green-700 text-3xl tracking-wide">Close</span>
          </div>
        </div>
        <div class="px-8 py-2 bg-gray-200 w-40 ml-8 text-gray-800 font-medium rounded-full">
          {me && me.cart.length < 1
            ? `${me.cart.length} items`
            : `${me.cart.length} item`}
        </div>
      </header>
      <ul class="bg-gray-100">
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      {me.cart.length > 0 && (
        <footer class="bg-white mb-6 px-8">
          {/* <Checkout /> */}
          <TakeMyMoney>
            <button class="focus:outline-none focus:bg-green-700 hover:bg-green-700  bg-green-600 flex gap-3 text-3xl items-center justify-center text-white rounded-full py-8 px-12 w-full">
              <span class="pr-3">Proceed to checkout</span>
              <p class="text-3xl bg-green-700 px-6 py-3  shadow-inner rounded-lg">
                {formatMoney(calcTotalPrice(me.cart))}
              </p>
            </button>
          </TakeMyMoney>
        </footer>
      )}
    </CartStyles>
  );
}

export default Cart;

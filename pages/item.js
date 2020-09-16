import SingleItem from "../components/SingleItem";
import Items from "../components/Items";
import Footer from "../components/Footer";

const Item = (props) => (
  <div>
    <SingleItem id={props.query.id} />
    <br></br>
    <div class="px-10">
      <Items page={parseFloat(props.query.page) || 1} />
    </div>
    <Footer />
  </div>
);

export default Item;

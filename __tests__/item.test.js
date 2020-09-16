import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABC123",
  title: "a cool item",
  price: 1000,
  description: "This item is really cool!",
  image: "dog.jpg",
  largeImage: "largedog.jpg",
};

describe("<Item/>", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  // it("renders and displays properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const PriceTag = wrapper.find("PriceTag");
  //   console.log(wrapper.debug());
  //   expect(PriceTag.children().text()).toBe("$10");
  // });
});

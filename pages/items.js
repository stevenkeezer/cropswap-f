import React from "react";
import Items from "../components/Items";

export default function ItemsPage(props) {
  return <Items page={parseFloat(props.query.page) || 1} />;
}

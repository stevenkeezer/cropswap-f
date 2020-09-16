import React, { useState } from "react";

function SelectBox1() {
  const [value, setValue] = useState("Relevant");

  return (
    <div className="form-group">
      <select
        value={value}
        style={{
          // fontFamily: "radnika_next",
          color: "rgba(0, 0, 0, 0.4)",
          width: "100%",
          paddingLeft: "5px",
          height: 30,
          borderRadius: 3,
          border: "none",
          outline: "none",
        }}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
      >
        <option value="select">{value}</option>
        <option value="First">Popular</option>
        <option value="Second">Relevant</option>
        <option value="Third">Exact Text</option>
        <option value="Third">Newest</option>
        <option value="Third">Most Makes</option>
      </select>
    </div>
  );
}

// // a select with dynamically created options
// const options = [
//   "Select an Option",
//   "First Option",
//   "Second Option",
//   "Third Option",
// ];

function SelectBox2() {
  const [value, setValue] = useState("All Things");

  return (
    <div className="form-group">
      <select
        value={value}
        style={{
          // fontFamily: "radnika_next",
          color: "rgba(0, 0, 0, 0.4)",
          width: "100%",
          paddingLeft: "5px",
          height: 30,
          borderRadius: 3,
          border: "none",
          outline: "none",
        }}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
      >
        <option value="select">{value}</option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
      </select>
    </div>
  );
}

function SelectBox3() {
  const [value, setValue] = useState("Sort By");

  return (
    <div className="form-group ">
      <select
        value={value}
        style={{
          // fontFamily: "radnika_next",
          // color: "rgba(0, 0, 0, 0.4)",
          width: "100%",
          paddingLeft: "5px",
          height: 30,
          border: ".5px solid black ",
          // outline: "none",
        }}
        onChange={(e) => setValue(e.target.value)}
        className="form-control mr-auto"
      >
        <option value="select">{value}</option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
      </select>
    </div>
  );
}
export { SelectBox1, SelectBox2, SelectBox3 };

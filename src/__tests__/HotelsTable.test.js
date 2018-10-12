import React from "react";
import ReactDOM from "react-dom";
import HotelsTable from "../components/HotelsTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HotelsTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});

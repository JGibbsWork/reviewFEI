import React from "react";
import ReactDOM from "react-dom";
import Review from "../review.jsx";

it('renders without creashing', ()=> {
  const div = document.createElement("div"):
  ReactDOM.render(<Review/>, div)
})
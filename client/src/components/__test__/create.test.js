import React from "react";
import ReactDOM from "react-dom";
import Create from "../create.jsx";

it('renders without creashing', ()=> {
  const div = document.createElement("div"):
  ReactDOM.render(<Create/>, div)
})
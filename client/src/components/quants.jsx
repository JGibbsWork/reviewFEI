import React from "react";

const quants = (props) => {
  if(props.total > props.increment) {
    return(
    <p className="totals">1-{props.increment} of {props.total} Reviews</p>
    )
  } else {
    return(
      <p>1-{props.total} Reviews</p>
    )
  }
}

export default quants;
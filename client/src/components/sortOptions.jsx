import React from "react";

const sortOptions = (props) => {
  let sorter;
  if(props.sortBy === '' || props.sortBy === 'helpful') {
    sorter = "Most Helpful"
  }
  if(props.sortBy === 'recent') {
    sorter = "Most Recent"
  }
  if(props.sortBy === 'highLow') {
    sorter = "Ratings Highest to Lowest"
  }
  if(props.sortBy === 'lowHigh') {
    sorter = "Most Ratings Lowest to Highest"
  }

  if(props.open) {
    return (
      <span onMouseLeave={props.handleOpen} className="sortOptions">
        <span className="sortOption" onClick={props.handleSort} name="helpful">Most Helpful</span>
        <span className="sortOption" onClick={props.handleSort} name="recent">Most Recent</span>
        <span className="sortOption" onClick={props.handleSort} name="highLow">Rating Highest to Lowest</span>
        <span className="sortOption" onClick={props.handleSort} name="lowHigh">Rating Lowest to Highest</span>
      </span>
    )
  } else {
    return (
      <span className="sortOptions">
        <span className="sortOptions" onMouseEnter={props.handleOpen}>Sort By {sorter}</span>
      </span>
    )
  }
}

export default sortOptions
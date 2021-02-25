import React from "react";
import StarRatings from "react-star-ratings";
import Quants from "./quants.jsx";

let ReviewHead = (props) => {
  return (
    <div className="reviewHead">
        <h3 className="revtitle">Reviews</h3>
        <button
        className=" writeReviewButton"
        onClick={props.handleCreate}>Write a Review</button>
        <div className="starTitles">
          <a className="ratingsSnapshot">Rating Snapshot</a>
          <a className="ratingsSnapshot">Select a row below to filter reviews.</a>
        </div>
        <div className="starsAndBars">
          <div className="starCountSection">
            <span name="5" className="starSpan"onClick={props.handleSelect}>
            <span className="starIndicator">5 ☆</span>
            <input readOnly type="range"
            name="5"
            className="revrange starSlide"
            value={props.reviewDeets.five}
            min="0"
            max={props.reviewDeets.total}
            style={{background: `linear-gradient(to right, #3B668E
            ${(props.reviewDeets.five / props.reviewDeets.total) * 100}%,
            #fff ${(props.reviewDeets.five / props.reviewDeets.total) * 100}%,
            #fff 100%`}}/>
            <span className="starcount">{props.reviewDeets.five}</span>
            </span>
          </div>
          <div className="starCountSection">
              <span name="4" className="starSpan" onClick={props.handleSelect}>
              <span className="starIndicator">4 ☆</span>
              <input readOnly type="range"
              name="4"
              className="revrange starSlide"
              value={props.reviewDeets.four}
              min="0"
              max={props.reviewDeets.total}
              style={{background: `linear-gradient(to right, #3B668E
              ${(props.reviewDeets.four / props.reviewDeets.total) * 100}%,
              #fff ${(props.reviewDeets.four / props.reviewDeets.total) * 100}%,
              #fff 100%`}}/>
              <span className="starcount">{props.reviewDeets.four}</span>
              </span>
          </div>
          <div className="starCountSection">
              <span name="3" className="starSpan" onClick={props.handleSelect}>
              <span className="starIndicator">3 ☆</span>
              <input readOnly type="range"
              name="3"
              className="revrange starSlide"
              value={props.reviewDeets.three}
              min="0"
              max={props.reviewDeets.total}
              style={{background: `linear-gradient(to right, #3B668E
              ${(props.reviewDeets.three / props.reviewDeets.total) * 100}%,
              #fff ${(props.reviewDeets.three / props.reviewDeets.total) * 100}%,
              #fff 100%`}} />
              <span className="starcount">{props.reviewDeets.three}</span>
              </span>
          </div>
          <div className="starCountSection">
              <span name="2" className="starSpan" onClick={props.handleSelect}>
              <span className="starIndicator">2 ☆</span>
              <input readOnly type="range"
              name="2"
              className="revrange starSlide"
              value={props.reviewDeets.two}
              min="0"
              max={props.reviewDeets.total}
              style={{background: `linear-gradient(to right, #3B668E
              ${(props.reviewDeets.two / props.reviewDeets.total) * 100}%,
              #fff ${(props.reviewDeets.two / props.reviewDeets.total) * 100}%,
              #fff 100%`}}/>
              <span className="starcount">{props.reviewDeets.two}</span>
              </span>
          </div>
          <div className="starCountSection">
              <span name="1" className="starSpan" onClick={props.handleSelect}>
              <span className="starIndicator">1  ☆</span>
              <input readOnly
              type="range"
              name="1"
              className="revrange starSlide"
              value={props.reviewDeets.one}
              min="0"
              max={props.reviewDeets.total}
              style={{background: `linear-gradient(to right, #3B668E
              ${(props.reviewDeets.one / props.reviewDeets.total) * 100}%,
              #fff ${(props.reviewDeets.one / props.reviewDeets.total) * 100}%,
              #fff 100%`}}/>
              <span className="starcount">{props.reviewDeets.one}</span>
              </span>
            </div>
        </div>
        <div className="aveCustTitle">
          <span className="aveCustTitle">Average Customer Ratings</span>
        </div>
        <div className="aveAndFit">
          <div className="aveTitles">
            <div>
              <span className="aveTitle">Overall</span>
            </div>
            <div className="aveStars">
              <span>
              <StarRatings
              rating={props.reviewDeets.average}
              starRatedColor="#3B668E"
              numberOfStars={5}
              starDimension='20px'
              starSpacing='1.5px'/>
              </span>
            </div>
            <div>
              <span className="aveStarCount">{props.reviewDeets.average}</span>
            </div>
          </div>
          <div className="aveContents">
            <div>
              <span>Overall Fit Rating</span>
            </div>
            <div>
              <span className="aveFit">
                <input readOnly
                type="range"
                name="fit-slider"
                className="revrange fitSlider"
                value={props.reviewDeets.fitAve}
                min="1"
                max="3"/>
              </span>
              <br></br>
              <div>
                <span className="runsSmallave">runs small</span>
                <span className="runsLargeave">runs large</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ReviewHead;
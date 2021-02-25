import React from "react";
import axios from "axios";
import TimeAgo from "react-timeago";
import StarRatings from "react-star-ratings";

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rendered: false,
      age: '',
      recomend: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  compoentDidMount(){
    let recomend = null;
    let age = null;
    if(this.props.recommended === 1) {
      recomend = '✔ Yes, I recommend this product.'
    } else {
      recomend = `✘ No, I don't recommend this product.`
    }
    if (this.props.ageRange === 1) {
      age='18 and younger';
    } if (this.props.ageRange === 2) {
      age='18-24';
    } if (this.props.ageRange === 3) {
      age='25-34';
    } if (this.props.ageRange === 4) {
      age='35-44';
    } if (this.props.ageRange === 5) {
      age='45-54';
    } if (this.props.ageRange === 6) {
      age='55-64';
    } if (this.props.ageRange === 7) {
      age='65-74';
    } if (this.props.ageRange === 8) {
      age='75 and above';
    }
    this.setState({
      rendered: true,
      age: age,
      recomend: recomend
    })
  }


  handleClick(e) {
    axios.put(`http://3.139.79.64:3003/api/reviews/${this.props.review.productID}`, {help: e.target.name, review: this.props.review})
      .then(()=>{
        this.props.handleHelpClick()
      })
      .then(()=>{
        if(e.target.name === 'yes') {
          let temp = this.props.review.yes;
          temp++;
          this.props.helped(this.props.index, {yes: temp, no: this.props.review.no})
        } else {
          let temp = this.props.review.no;
          temp++;
          this.props.helped(this.props.index, {yes: this.props.review.yes, no: temp})
        }
      })
  }


  render() {
    let recomend;
    let recIntro;
    let ageRange;
    if(this.props.review.recommended === 1) {
      recIntro = '✔ Yes,'
      recomend = 'I recommend this product.'
    } else {
      recIntro = '✘ No,'
      recomend = `I don't recommend this product.`
    }
    if (this.props.review.ageRange === 1) {
      ageRange='18 and younger';
    } if (this.props.review.ageRange === 2) {
      ageRange='18-24';
    } if (this.props.review.ageRange === 3) {
      ageRange='25-34';
    } if (this.props.review.ageRange === 4) {
      ageRange='35-44';
    } if (this.props.review.ageRange === 5) {
      ageRange='45-54';
    } if (this.props.review.ageRange === 6) {
      ageRange='55-64';
    } if (this.props.review.ageRange === 7) {
      ageRange='65-74';
    } if (this.props.review.ageRange === 8) {
      ageRange='75 and above';
    }
      return (
        <div className="review">
          <div className = "userStats">
            <span className="userName">{this.props.review.nickName}</span>
            <br></br>
            <span className="userLocation">{this.props.review.location}</span>
          </div>
          <div className = "reviewBody">
            <StarRatings className="stars"
            rating={this.props.review.rating}
            starRatedColor="#3B668E"
            numberOfStars={5}
            starDimension='20px'
            starSpacing='1.5px'/>
            <TimeAgo date={this.props.review.timePosted} className="timeAgo" />
            <br></br>
            <span className="indivrevtitle">{this.props.review.title}</span>
            <br></br>
            <span className="indivrevbody">{this.props.review.review}</span>
            <br></br>
            <span className="indivrevage">
              <span className="boldage">Age</span>
              <span>{ageRange}</span>
            </span>
            <br></br>
            <span className="indivrevrec">
              <span className="boldrec">{recIntro}</span>
              <span>{recomend}</span>
            </span>
            <br></br>
            <div className="helpful">
              <span className="helpfultext">Helpful?</span>
              <button
              className="revbutton helpful"
              name="yes"
              onClick={this.handleClick}>Yes {this.props.review.yes}</button>
              <button
              className="revbutton helpful"
              name="no"
              onClick={this.handleClick}>No {this.props.review.no}</button>
            </div>
          </div>
          <div className="fitDetails">
            <span className="fitTitle">Overall Fit Rating</span>
            <input readOnly type="range" name="fit-slider" className=" revrange fitSlider indiv" value={this.props.review.fit} min="1" max="3"/>
            <div>
              <span className="runsSmall">runs small</span>
              <span className="runsLarge">runs large</span>
            </div>
          </div>
        </div>
      )
  }
}

export default Review;

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import StarRatings from "react-star-ratings";
import Tippy from "@tippy.js/react";

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 1,
      title: null,
      review: null,
      recommended: null,
      fit: null,
      age: null,
      nickName: null,
      location: null,
      email: null,
      starText: 'Click to Rate'
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.changeRateText = this.changeRateText.bind(this)
  }

  handleSelectChange(e) {
    this.setState({
      age: Number(e.target.value)
    })
  }

  changeRateText(num){
    if(num === 1) {
      this.setState({
        starText: 'Poor'
      })
    }
    if(num === 2) {
      this.setState({
        starText: 'Fair'
      })
    }
    if(num === 3) {
      this.setState({
        starText: 'Average'
      })
    }
    if(num === 4) {
      this.setState({
        starText: 'Good'
      })
    }
    if(num === 5) {
      this.setState({
        starText: 'Excellent'
      })
    }
  }

  changeRating( newRating, name ) {
    this.changeRateText(newRating)
    this.setState({
      rating: newRating
    });
  }

  handleRecommend(e) {
    this.setState({
      rating: e.target.value
    });
  }

  handleRadioChange(e) {
    let num = Number(e.target.getAttribute('value'));
    this.setState({
      [e.target.name]: num
    })
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`http://3.139.79.64:3003/api/reviews/${this.props.product.iD}`, {
      productID: this.props.product.iD,
      rating: this.state.rating,
      title: this.state.title,
      review: this.state.review,
      recommended: this.state.recommended,
      fit: this.state.fit,
      ageRange: this.state.age,
      nickName: this.state.nickName,
      location: this.state.location,
      email: this.state.email,
      timePosted: new Date(),
      yes: 0,
      no: 0
    })
    .then(()=>{
      this.props.handleCreate()
    })
  }

  render() {
    if (this.props.open) {
      return ReactDOM.createPortal(
        <>
        <div className="createOverlay">
          <div className="create">
              <div className="createinputImage">
                <img src={this.props.product.imgUrl} className="createrevimage" />
                <p>{this.props.product.imgUrlDes}</p>
              </div>
              <div className="createInputDetails">
                <button className="revbutton createExitButton" onClick={this.props.handleCreate}>X</button>
              <form className="reviewDetails">
                <div className="createReview createRevTitle">
                  <div>
                   <p className="createTitle">My Review for {this.props.product.imgUrlDes}</p>
                  </div>
                  <div>
                    <span className="reqtext">Required fields are marked with *</span>
                  </div>
                </div>
                <div className="createReview ratingSection">
                  <span className="starInputL">Product Rating</span>
                  <StarRatings
                  starRatedColor="green"
                  rating={this.state.rating}
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  starDimension='40px'
                  starSpacing='1.5px'
                  starHoverColor='green'
                  required/>
                  <span className="starInputR">{this.state.starText}</span>

                </div>
                <div className="createReview reviewTitle">
                  <div className="createinputTitle">
                    <span>Review Title*</span>
                  </div>
                  <input name="title"
                  id="title"
                  type="text"
                  placeholder="My new favorite helmet!"
                  className="reviewTitle"
                  required
                  onChange={this.handleTextChange}/>
                </div>
                <div className="createReview reviewBody">
                  <div className="createinputTitle">
                    <span>Review*</span>
                  </div>
                  <textarea name="review"
                  className= "reviewBody"
                  type="text"
                  placeholder="What an amazing helmet, I swear this changed my life forever. I wore this to my interview at google and they hired me on the spot."
                  required
                  onChange={this.handleTextChange}></textarea>
                </div>
                <div className="createReview recommend">
                  <div className="rectext">
                    <p>Would You recommend This To A Friend?</p>
                  </div>
                  <div className="recbuttons">
                    <input name="recommended"
                    className="rec"
                    type="radio"
                    value="1"
                    id="yes"
                    onClick={this.handleRadioChange}/>
                    <label className="rec" htmlFor="yes">Yes</label>
                    <input name="recommended"
                    className="rec"
                    id="no"
                    type="radio"
                    value="0"
                    onClick={this.handleRadioChange}/>
                    <label className="rec" htmlFor="no">No</label>
                  </div>
                </div>
                <div className="createReview fit">
                  <div className="fitText">
                    <p>Overall Fit</p>
                  </div>
                  <div className="fitContainer">
                    <div className="fitbuttons">
                        <input className="fit"
                        name="fit"
                        id="fit1"
                        type="radio"
                        value="1"
                        onClick={this.handleRadioChange} />
                      <Tippy content="Too Small">
                        <label className="fit" htmlFor="fit1" ></label>
                      </Tippy>
                      <input className="fit"
                      name="fit"
                      id="fit2"
                      type="radio"
                      value="2"
                      onClick={this.handleRadioChange} />
                      <Tippy content="Just Right">
                        <label className="fit" htmlFor="fit2" ></label>
                      </Tippy>
                      <input className="fit"
                      name="fit"
                      id="fit3"
                      type="radio"
                      value="3"
                      onClick={this.handleRadioChange} />
                      <Tippy content="Too Large">
                        <label className="fit" htmlFor="fit3" ></label>
                      </Tippy>
                    </div>
                    <div className="fitdescriptions">
                      <p className="fitdesc">Runs Small</p>
                      <p className="fitdesc">Runs Large</p>
                    </div>
                  </div>
                </div>
                <div className="createReview ageSelect">
                  <div className="ageText">
                    <label>Age</label>
                  </div>
                  <div className="ageSelector">
                    <select className="ageRange" onChange={this.handleSelectChange}>
                      <option>Select</option>
                      <option value="1">18 and younger</option>
                      <option value="2">18-24</option>
                      <option value="3">25-34</option>
                      <option value="4">35-44</option>
                      <option value="5">45-54</option>
                      <option value="6">55-64</option>
                      <option value="7">65-74</option>
                      <option value="8">75 and above</option>
                    </select>
                  </div>
                </div>
                <div className="createReview nameLoc">
                  <div className="nameInput">
                    <span className="nickInput">Nick Name*</span>
                    <input name="nickName"
                    className="nameInput"
                    type="text"
                    placeholder="Mr. Worldwide"
                    required
                    onChange={this.handleTextChange} />
                  </div>
                  <div className="locationInput">
                    <span className="locInput">Location</span>
                    <input name ="location"
                    className="locationInput"
                    type="text"
                    placeholder="FlavorTown"
                    onChange={this.handleTextChange} />
                  </div>
                </div>
                <div className="createReview emailReview">
                  <div className="emailInput">
                    <span className="emailIn">Email*</span>
                    <input name="email"
                    className="emailInput"
                    type="text"
                    placeholder="Julian.Yuen@Galvanize.com"
                    required
                    onChange={this.handleTextChange} />
                  </div>
                </div>

                  <input type="radio" required/>
                  <label>I agree to the terms and conditions</label>

                  <p className="termFinePrint">You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</p>

                    <input
                    className="postText"
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Post Review"/>

              </form>
            </div>
          </div>
        </div>
      </>,
        document.getElementById('portal')
      )
    } else {
      return null;
    }
  }
}

export default Create;
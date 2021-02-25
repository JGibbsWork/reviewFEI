import React from "react";
import Review from "./review.jsx";
import Quants from "./quants.jsx";
import Sort from "./sortOptions.jsx"


class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      increment: 10,
      reviews: [],
      filteredReviews: [],
      open: false,
    }
    this.filterReviews = this.filterReviews.bind(this);
    this.mostHelpful = this.mostHelpful.bind(this);
    this.recent = this.recent.bind(this);
    this.highLow = this.highLow.bind(this);
    this.lowHigh = this.lowHigh.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.removeSelect = this.removeSelect.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.helped = this.helped.bind(this);
    this.reviewLoad = this.reviewLoad.bind(this);
  }

  reviewLoad() {
    this.setState({
      reviews: this.props.reviews.reverse(),
      filteredReviews: this.props.reviews.reverse()
    })
  }

  handleOpen() {
    if(this.state.open) {
      this.setState({
        open: false
      })
    } else {
      this.setState({
        open: true
      })
    }
  }



  loadMore() {
    let temp = this.state.increment;
    if (this.state.increment + 10 < this.state.reviews.length) {
      temp += 10;
      this.setState({
        increment: temp
      })
    } else {
      this.setState({
        increment: this.state.reviews.length
      })
    }
  }


  removeSelect(e) {
    this.props.removeSelected(e.target.value)
    this.checkAll()
    this.props.filteredByNum()
  }

  checkAll() {
    if(this.state.reviews < this.props.reviews) {
      this.reviewLoad()
    }

    if(this.state.helped > 0) {
      this.handleHelp(this.state.helped);
    }

    if (this.props.selected.includes(5) || this.props.selected.includes(4) || this.props.selected.includes(3) || this.props.selected.includes(2) || this.props.selected.includes(1)) {
      if (this.props.filteredNum === false) {
        this.filterReviews();
        this.props.filteredByNum()
      }
    }

    if (this.state.filteredReviews.length !== this.state.reviews.length && this.props.selected.length === 0) {
      this.setState({
        filteredReviews: this.props.reviews.reverse()
      })
    }

    if (this.props.selectedType === 'helpful') {
      if(this.props.filteredSort === false) {
        this.mostHelpful(this.state.reviews);
        this.props.filteredBySort();
      }
    }

    if(this.props.selectedType === 'recent') {
      if(this.props.filteredSort === false) {
        this.recent();
        this.props.filteredBySort();
      }
    }

    if(this.props.selectedType === 'highLow') {
      if(this.props.filteredSort === false) {
        this.highLow();
        this.props.filteredBySort();
      }
    }

    if(this.props.selectedType ==='lowHigh') {
      if(this.props.filteredSort === false) {
        this.lowHigh();
        this.props.filteredBySort();
      }
    }
  }

  componentDidMount() {
    this.reviewLoad()
  }

  helped(index, rating) {
    if (this.state.reviews[index].yes !== rating.yes) {
      let temp = this.state.reviews;
      temp[index].yes = rating.yes
      this.setState({
        reviews: temp
      })
    }
    if (this.state.reviews[index].no !== rating.no) {
      let temp = this.state.reviews;
      temp[index].no = rating.no
      this.setState({
        reviews: temp
      })
    }
    if (this.state.filteredReviews[index].yes !== rating.yes) {
      let temp = this.state.filteredReviews;
      temp[index].yes = rating.yes
      this.setState({
        filteredReviews: temp
      })
    }
    if (this.state.filteredReviews[index].no !== rating.no) {
      let temp = this.state.filteredReviews;
      temp[index].no = rating.no
      this.setState({
        filteredReviews: temp
      })
    }
  }

  componentDidUpdate(prevProps) {
    this.checkAll()
  }

  filterReviews() {
    let result = [];
    for (let i = 0; i < this.state.reviews.length; i++) {
      if (this.props.selected.includes(this.state.reviews[i].rating)) {
        result.push(this.state.reviews[i])
      }
    }
    this.setState({
      filteredReviews: result
    })
  }

  mostHelpful() {
    let result = this.state.reviews.sort((a, b) => b.yes - a.yes);
    this.setState({
      filteredReviews: result
    })
  }

  recent() {
    let result = this.state.reviews.sort((a, b) => {
      return new Date(b.timePosted) - new Date(a.timePosted);
    })
    this.setState({
      filteredReviews: result
    })
  }

  highLow() {
    let result = this.state.reviews.sort((a, b) => b.rating - a.rating)
    this.setState({
      filteredReviews: result
    })
  }

  lowHigh() {
    let result = this.state.reviews.sort((a, b) => a.rating - b.rating)
    this.setState({
      filteredReviews: result
    })
  }

  render() {
    if(this.state.reviews.length < 1) {
      return null
    } else if(this.props.selected.length > 0 && this.state.increment < this.state.filteredReviews.length) {
      return (
      <div className="reviews">
        <div className="reviewSorts">
          <Quants total={this.state.filteredReviews.length} increment={this.state.increment}/>
          <Sort open={this.state.open} handleOpen={this.handleOpen} handleSort={this.props.handleSort} sortBy={this.props.selectedType}/>
        </div>
        {this.props.selected.map((filter, index) => (
            <button
            value={filter}
            onClick={this.removeSelect}
            key={index}
            className="revbutton">{filter} stars</button>
        ))}
        <button value='clear' className="revbutton" onClick={this.removeSelect}>Clear All</button>
        {this.state.filteredReviews.slice(0,this.state.increment).map((review, index) => (
          <Review review={review}
          handleHelpClick={this.props.handleHelpClick}
          helped={this.helped}
          index={index}
          key={index}/>
        ))}
        <span className="loadMore">
        <button className="revbutton" onClick={this.loadMore}>Load More</button>
        </span>
        </div>
      )
    } else if(this.props.selected.length > 0 && this.state.increment >= this.state.filteredReviews.length) {
      return (
        <div className="reviews">
          <div className="reviewSorts">
            <Quants total={this.state.filteredReviews.length} increment={this.state.increment}/>
            <Sort open={this.state.open} handleOpen={this.handleOpen} handleSort={this.props.handleSort} sortBy={this.props.selectedType}/>
          </div>
          {this.props.selected.map((filter, index) => (
            <button className="revbutton" value={filter} onClick={this.removeSelect} key={index}>{filter} stars</button>
          ))}
          <button className="revbutton" value='clear' onClick={this.removeSelect}>Clear All</button>
          {this.state.filteredReviews.map((review, index) => (
            <Review review={review}
            handleHelpClick={this.props.handleHelpClick}
            helped={this.helped}
            index={index}
            key={index}/>
          ))}
      </div>
      )
    } else if (!this.props.selectedType && this.state.increment < this.state.reviews.length) {
      return (
        <div className="reviews">
          <div className="reviewSorts">
            <Quants total={this.state.reviews.length} increment={this.state.increment}/>
            <Sort open={this.state.open} handleOpen={this.handleOpen} handleSort={this.props.handleSort} sortBy={this.props.selectedType}/>
          </div>
          {this.state.reviews.slice(0,this.state.increment).map((review, index) => (
              <Review review={review}
              handleHelpClick={this.props.handleHelpClick}
              helped={this.helped}
              index={index}
              key={index}/>
              ))}
              <span className="loadMore">
                <button className="revbutton" onClick={this.loadMore}>Load More</button>
              </span>
        </div>
      )
    } else if (!this.props.selectedType && this.state.increment >= this.state.reviews.length) {
      return (
        <div className="reviews">
          <div className="reviewSorts">
            <Quants total={this.state.reviews.length} increment={this.state.increment}/>
            <Sort open={this.state.open} handleOpen={this.handleOpen} handleSort={this.props.handleSort} sortBy={this.props.selectedType}/>
          </div>
          {this.state.reviews.slice(0,this.state.increment).map((review, index) => (
              <Review review={review}
              handleHelpClick={this.props.handleHelpClick}
              helped={this.helped}
              index={index}
              key={index}/>
              ))}
        </div>
      )
    } else if (this.state.increment === this.state.filteredReviews.length ) {
      return (
        <div className="reviews">
          <div className="reviewSorts">
            <Quants total={this.state.reviews.length} increment={this.state.increment}/>
            <Sort open={this.state.open} handleOpen={this.handleOpen} handleSort={this.props.handleSort} sortBy={this.props.selectedType}/>
          </div>
          {this.state.filteredReviews.slice(0,this.state.increment).map((review, index) => (
              <Review review={review}
              handleHelpClick={this.props.handleHelpClick}
              helped={this.helped}
              index={index}
              key={index}/>
              ))}
        </div>
      )
    } else {
      return (
        <div className="reviews">
          <div className="reviewSorts">
            <Quants total={this.state.filteredReviews.length} increment={this.state.increment}/>
            <Sort open={this.state.open} handleOpen={this.handleOpen} handleSort={this.props.handleSort} sortBy={this.props.selectedType}/>
          </div>
          {this.state.filteredReviews.slice(0,this.state.increment).map((review, index) => (
              <Review review={review}
              handleHelpClick={this.props.handleHelpClick}
              helped={this.helped}
              index={index}
              key={index}/>
              ))}
              <span className="loadMore">
                <button className="revbutton" onClick={this.loadMore}>Load More</button>
              </span>
        </div>
      )
    }
  }
}

export default ReviewList;
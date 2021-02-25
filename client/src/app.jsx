import React from "react";
import axios from "axios";
import ReviewList from "./components/reviewList.jsx";
import ReviewHead from "./components/reviewHead.jsx";
import Create from "./components/create.jsx";
import Footer from "./components/footer.jsx";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      product: null,
      productID: 169938,
      reviewDeets: {},
      selected: [],
      selectedType: '',
      creating: false,
      filteredNum: false,
      filteredSort: false
    }
    this.reviewsAndProduct = this.reviewsAndProduct.bind(this);
    this.getNumbers = this.getNumbers.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.filteredByNum = this.filteredByNum.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.filteredBySort = this.filteredBySort.bind(this);
    this.removeSelected = this.removeSelected.bind(this)
  }

  componentDidMount() {
    this.reviewsAndProduct()
  }

  removeSelected(num) {
    if (num === 'clear') {
      this.setState({
        selected: []
      })
    } else {
      let temp = this.state.selected;
      let index = temp.indexOf(num);
      temp.splice(index, 1)
      this.setState({
        selected: temp
      })
    }
  }

  filteredByNum() {
    if (this.state.filteredNum === false) {
      this.setState({
        filteredNum: true
      })
    } else {
      this.setState({
        filteredNum: false
      })
    }
  }

  filteredBySort() {
    if (this.state.filteredSort === false) {
      this.setState({
        filteredSort: true
      })
    } else {
      this.setState({
        filteredSort: false
      })
    }
  }

  getNumbers(array) {
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    let one = 0;
    let tempTotal = 0;
    let fitTotal = 0;
    for (let i = 0; i < array.length; i++) {
      tempTotal += array[i].rating;
      fitTotal += array[i].fit
      if (array[i].rating === 5) {
        five++;
      } else if (array[i].rating === 4) {
        four++;
      } else if (array[i].rating === 3) {
        three++;
      } else if (array[i].rating === 2) {
        two++;
      } else {
        one++;
      }
    }
    let aveRatingTemp = tempTotal / array.length;
    let aveRating = Math.round(aveRatingTemp * 10) / 10;
    let fitAveTemp = fitTotal / array.length;
    let fitAve = Math.round(fitAveTemp * 10) / 10;
    this.setState({
      reviewDeets: {
        average: aveRating,
        total: array.length,
        fitAve: fitAve,
        five: five,
        four: four,
        three: three,
        two: two,
        one: one
      }
    })
  }

  reviewsAndProduct() {
    axios.get(`/api/reviews/${this.state.productID}`)
      .then((results) => {
        this.setState({
          reviews: results.data.reviews,
          product: results.data.product[0],
        })
        this.getNumbers(results.data.reviews)
      })
  }

  handleHelpClick(e) {
    this.reviewsAndProduct()
  }

  handleSelect(e) {
    let temp = this.state.selected;
    let name = e.target.getAttribute('name');
    if (!temp.includes(Number(name))) {
      temp.push(Number(name))
    }
    this.setState({
      selected: temp,
      filteredNum: false
    })
  }

  handleSort(e) {
    let val = e.target.getAttribute('name')
    this.setState({
      selectedType: val,
      filteredSort: false
    })
  }

  handleCreate() {
    if (this.state.creating === false) {
      this.setState({
        creating: true
      })
    } else {
      this.reviewsAndProduct();
      this.setState({
        creating: false
      })
    }
  }


  render() {
    if (this.state.reviews.length < 1) {
      return (
        <h1>Hold Please...</h1>
      )
    }
    else {
      return (
        <div>
          <ReviewHead reviewDeets={this.state.reviewDeets}
          handleSelect={this.handleSelect}
          handleCreate={this.handleCreate} />
          <Create open={this.state.creating}
          handleCreate={this.handleCreate}
          product={this.state.product}/>
          <ReviewList reviews={this.state.reviews}
          handleSort={this.handleSort}
          selected={this.state.selected}
          handleHelpClick={this.handleHelpClick}
          filteredNum={this.state.filteredNum}
          filteredByNum={this.filteredByNum}
          filteredSort={this.state.filteredSort}
          filteredBySort={this.filteredBySort}
          selectedType={this.state.selectedType}
          removeSelected={this.removeSelected}/>
          <Footer/>
        </div>
      )
    }
  }
}

export default App;
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Container, Grid, Button, Divider } from "semantic-ui-react";
import RestaurantTable from "./RestaurantTable";
import FilterBar from "./FilterBar";
import axios from "axios";
import { GetGenreList } from "./GetGenreList";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      //inital data from API
      apiData: [],
      //data after applying search and filters
      filteredData: [],
      //10 table display list as per page
      displayTableList: [],
      genres: [],
      pageCountList: [],
      currentPage: 1,
    };
  }

  async componentDidMount() {
    //API fetching
    try {
      let resp = await axios.get(
        "https://code-challenge.spectrumtoolbox.com/api/restaurants",
        {
          headers: { authorization: "Api-Key q3MNxtfep8Gt" },
        }
      );
      // assigning resp to apiData in try catch, so that apiData remains an array
      this.setState({ apiData: resp.data });
    } catch (err) {
      console.log(err);
    }
    this.getGenre();
    this.allFilter();
    this.totalPage();
  }

  getGenre = () => {
    //GetGenre is external function
    this.setState({ genre: GetGenreList(this.state.apiData) });
  };

  addIndex = () => {
    let { apiData } = this.state;
    for (let index in apiData) {
      apiData[index].index = index;
    }
    return apiData;
  };

  allFilter = () => {
    //apiData will be filtered before passing to state.filteredData
    this.setState({ filteredData: this.addIndex() });
  };

  //total page counter
  totalPage = () => {
    let { filteredData } = this.state;
    let totalPages = Math.floor(filteredData.length / 10);
    totalPages = filteredData.length % 10 ? totalPages + 1 : totalPages;
    let pageList = Array.from(
      Array(totalPages)
        .fill()
        .map((_, index) => 1 + index)
    );
    this.setState({ pageCountList: pageList, currentPage: 1 });
    //as many times totalPage is called, the tablePageData will become 0
    this.tablePageData(1);
  };

  tablePageData = (pageNumber) => {
    let { filteredData } = this.state;
    let firstItemIndex = pageNumber * 10 - 10;
    let pageListItem = [];
    let index = firstItemIndex;
    while (index < firstItemIndex + 10) {
      if (filteredData[index]) {
        pageListItem.push(filteredData[index]);
      } else break;
      index++;
    }
    this.setState({ displayTableList: pageListItem });
  };

  handlePreviousPage = () => {
    let currentPage = this.state.currentPage - 1;
    this.setState({ currentPage: currentPage });
    this.tablePageData(currentPage);
  };

  handleNextPage = () => {
    let currentPage = this.state.currentPage + 1;
    this.setState({ currentPage: currentPage });
    this.tablePageData(currentPage);
  };

  render() {
    let { genre, displayTableList, pageCountList, currentPage } = this.state;
    return (
      <div className="child-masthead home-page">
        <Grid className="width-100" stackable>
          <Grid.Row>
            <Grid.Column width={4} className="right-border">
              <FilterBar genreList={genre} />
            </Grid.Column>
            <Grid.Column width={12}>
              <RestaurantTable
                tableData={{
                  tableList: displayTableList,
                  pagesList: pageCountList,
                  currentPage: currentPage,
                }}
                onPreviousPage={this.handlePreviousPage}
                onNextPage={this.handleNextPage}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(HomePage);

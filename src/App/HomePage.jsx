import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Container, Grid, Button, Divider } from "semantic-ui-react";
import RestaurantTable from "./RestaurantTable";
import FilterBox from "./FilterBox";
import axios from "axios";
import { GetGenreList } from "./GetGenreList";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [], //inital data from API
      filteredData: [], //data after applying search and filters
      displayTableList: [], //10 table display list as per page
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
      this.setState({ apiData: this.genreToList(resp.data) });
    } catch (err) {
      console.log(err);
    }
    this.setState({ filteredData: this.state.apiData });
    this.getGenre();
    this.totalPage();
  }

  genreToList = (apiData) => {
    for (let item in apiData) {
      apiData[item].genre = apiData[item].genre.split(",");
    }
    return apiData;
  };

  getGenre = () => {
    //GetGenre is external function
    this.setState({ genre: GetGenreList(this.state.apiData) });
  };

  addIndex = (apiData) => {
    for (let index in apiData) {
      apiData[index].index = index;
    }
    return apiData;
  };

  //total page counter
  totalPage = () => {
    let { filteredData } = this.state;
    let totalPages = Math.floor(filteredData.length / 10);
    totalPages = filteredData.length % 10 ? totalPages + 1 : totalPages;
    const pageList = Array.from(
      Array(totalPages)
        .fill()
        .map((_, index) => 1 + index)
    );
    this.setState({ pageCountList: pageList });
    //as many times totalPage is called, the tablePageData will become 0
    this.tablePageData(1, filteredData);
  };

  tablePageData = (pageNumber, filteredData) => {
    this.setState({ currentPage: pageNumber });
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
    this.tablePageData(currentPage, this.state.filteredData);
  };

  handleNextPage = () => {
    let currentPage = this.state.currentPage + 1;
    this.setState({ currentPage: currentPage });
    this.tablePageData(currentPage, this.state.filteredData);
  };

  handleSearch = (value) => {
    let { apiData } = this.state;
    apiData = apiData.filter((data) => {
      for (let genre of data.genre)
        if (genre.toLowerCase().includes(value)) return true;
      return (
        data.name.toLowerCase().includes(value.toLowerCase()) ||
        data.city.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({ filteredData: apiData });
    this.tablePageData(1, apiData);
  };
  handleGenreFilter = (value) => {};
  handleStateFilter = (value) => {};

  render() {
    let { genre, displayTableList, pageCountList, currentPage } = this.state;
    return (
      <div className="child-masthead home-page">
        <Grid className="width-100" stackable>
          <Grid.Row>
            <Grid.Column width={4} className="right-border">
              <FilterBox
                onSearchBar={this.handleSearch}
                onGenreFilter={this.handleGenreFilter}
                onStateFilter={this.handleStateFilter}
                genreList={genre}
              />
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

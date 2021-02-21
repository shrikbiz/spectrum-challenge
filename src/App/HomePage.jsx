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
      searchData: "", //stores searched value
      genreFilter: [], //stores list of genre selected in filtered
      stateFilter: [], //stores list of states selected in filtered
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
    this.setState({ genre: GetGenreList(this.state.apiData) });
    this.totalPage();
  }

  genreToList = (apiData) => {
    for (let item in apiData)
      apiData[item].genre = apiData[item].genre.split(",");
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
    this.tablePageData(1, filteredData);
  };

  tablePageData = (pageNumber, filteredData) => {
    this.setState({ currentPage: pageNumber });
    let firstItemIndex = pageNumber * 10 - 10;
    let pageListItem = [];
    let index = firstItemIndex;
    while (index < firstItemIndex + 10) {
      if (filteredData[index]) pageListItem.push(filteredData[index]);
      else break;
      index++;
    }
    this.setState({ displayTableList: pageListItem });
  };

  handleSearch = (value) => {
    this.setState({ searchData: value });
    this.handleFilters(value, false, false);
  };

  handleGenreFilter = (value) => {
    this.setState({ genreFilter: value });
    this.handleFilters(false, value, false);
  };

  handleStateFilter = (value) => {
    this.setState({ stateFilter: value });
    this.handleFilters(false, false, value);
  };

  handleFilters = (searchParam, genreParam, stateParam) => {
    let { searchData, genreFilter, stateFilter } = this.state;
    let { apiData } = this.state;

    if (searchParam) searchData = searchParam;
    else if (genreParam.length) genreFilter = genreParam;
    else if (stateParam.length) stateFilter = stateParam;
    console.log(
      `🚀 -> HomePage -> searchData, genreFilter, stateFilter`,
      searchData,
      genreFilter,
      stateFilter,
      apiData.length
    );

    if (searchData) {
      apiData = apiData.filter((data) => {
        for (let genre of data.genre)
          if (genre.toLowerCase().includes(searchData.toLowerCase()))
            return true;
        return (
          data.name.toLowerCase().includes(searchData.toLowerCase()) ||
          data.city.toLowerCase().includes(searchData.toLowerCase())
        );
      });
    }
    if (genreFilter.length) {
      apiData = apiData.filter((data) => {
        for (let genre of data.genre) {
          for (let eachSelectedGenre of genreFilter)
            if (genre.toLowerCase() === eachSelectedGenre.toLowerCase())
              return true;
        }
        return false;
      });
      console.log(`🚀 -> HomePage -> genreFilter`, apiData);
    }
    if (stateFilter.length) {
      apiData = apiData.filter(({ state }) => {
        for (let selectedState of stateFilter)
          if (selectedState.toLowerCase() === state.toLowerCase()) return true;
        return false;
      });
    }
    this.tablePageData(1, apiData);
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

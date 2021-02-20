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
      apiData: [],
      genres: [],
      filteredData: [],
      pageCountList: [],
      currentPage: 0,
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
    //creating genre list
    this.getGenre();
    this.allFilter();
    this.totalPage();
  }

  getGenre() {
    //GetGenre is external function
    this.setState({ genre: GetGenreList(this.state.apiData) });
  }

  allFilter() {
    let { apiData } = this.state;
    //apiData will be filtered before passing to state.filteredData
    this.setState({ filteredData: apiData });
  }

  //total page counter
  totalPage() {
    let { filteredData } = this.state;
    let totalPages = Math.floor(filteredData.length / 10);
    totalPages = filteredData.length % 10 ? totalPages + 1 : totalPages;
    let pageList = Array.from(Array(totalPages).keys());
    this.setState({ pageCountList: pageList });
    this.tablePageData(0);
  }

  // tablePageData(pageNumber) {

  // }

  render() {
    let { genre, filteredData, pageCountList } = this.state;
    return (
      <div className="masthead home-page">
        <Grid className="width-100" stackable>
          <Grid.Row>
            <Grid.Column width={4} className="right-border">
              <FilterBar genreList={genre} />
            </Grid.Column>
            <Grid.Column width={12}>
              <RestaurantTable
                tableData={{ tableList: filteredData, pages: pageCountList }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(HomePage);

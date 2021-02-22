/* eslint-disable jest/valid-expect */
import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "semantic-ui-react";
import { render } from "@testing-library/react";
import { RestaurantTable } from "../../App/Features/RestaurantTable";
import { HomePage } from "../../App/Components/HomePage";

it("HomePage renders Grid from semantic UI", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Grid></Grid>, div);
});

const tableData = {
  tableList: [
    {
      address1: "501 Prince George St",
      attire: "business casual",
      city: "Williamsburg",
      genre: (5)[("American", "Seafood", "International", "Asian", "Cafe")],
      hours: "Tue-Sat 10:00 AM-5:30 PM",
      id: "651628a1-9cea-4755-ac68-eaed5a0bb188",
      lat: "37.272483",
      long: "-76.707708",
      name: "A Chef's Kitchen",
      state: "VA",
      tags:
        "Social,Food and Dining,Restaurants,American,Social,Food and Dining,Restaurants,Seafood",
      telephone: "(757) 564-8500",
      website: "http://www.achefskitchen.biz",
      zip: "23185",
    },
  ],
  pagesList: [1, 2, 3, 4],
  currentPage: 1,
};
const sortedColumnData = {
  sortedColumn: "name",
  isIncrement: true,
};
let handleEvent = () => {};

it("render Grid correctly", () => {
  const { getByTestId } = render(<RestaurantTable />);
  expect(getByTestId("RestaurantTable").toHaveTextConent("Restaurent Name"));
});

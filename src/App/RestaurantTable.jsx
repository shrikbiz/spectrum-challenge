import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Menu, Icon, Message } from "semantic-ui-react";
import { SortedColumnList } from "../helpers/SortedColumnList";
import SortingIcon from "./SortingIcon";

const RestaurantTable = ({
  tableData,
  onPreviousPage,
  onNextPage,
  sortedColumnData,
  onSort,
}) => {
  let handleSortingEvent = (data) => {
    onSort(data);
  };
  const { tableList, pagesList, currentPage } = tableData;
  const previousPageLimit = pagesList[0] === currentPage;
  const nextPageLimit = pagesList[pagesList.length - 1] === currentPage;
  return (
    <div>
      {tableList.length ? (
        <Table celled className="restaurant-table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">
                Restaurant Name{" "}
                <SortingIcon
                  sortedColumnData={{
                    sortedColumnData,
                    columnName: SortedColumnList[0],
                  }}
                  onSort={handleSortingEvent}
                />
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="3">Location</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">
                Phone Number <span></span>
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">
                Genre <span> </span>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                Address{" "}
                <SortingIcon
                  sortedColumnData={{
                    sortedColumnData,
                    columnName: SortedColumnList[1],
                  }}
                  onSort={handleSortingEvent}
                />
              </Table.HeaderCell>
              <Table.HeaderCell>
                City
                <SortingIcon
                  sortedColumnData={{
                    sortedColumnData,
                    columnName: SortedColumnList[2],
                  }}
                  onSort={handleSortingEvent}
                />
              </Table.HeaderCell>
              <Table.HeaderCell>
                State
                <SortingIcon
                  sortedColumnData={{
                    sortedColumnData,
                    columnName: SortedColumnList[3],
                  }}
                  onSort={handleSortingEvent}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableList.map(
              ({ name, id, address1, city, state, telephone, genre }) => (
                <Table.Row key={id}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{address1}</Table.Cell>
                  <Table.Cell>{city}</Table.Cell>
                  <Table.Cell>{state}</Table.Cell>
                  <Table.Cell>{telephone}</Table.Cell>
                  <Table.Cell>
                    {genre.map((eachGenre, index) => (
                      <span key={index}>
                        {eachGenre}
                        {index !== genre.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Menu floated="right" pagination>
                  <Menu.Item
                    disabled={previousPageLimit}
                    onClick={onPreviousPage}
                    as="a"
                    icon
                  >
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item
                    disabled={nextPageLimit}
                    onClick={onNextPage}
                    as="a"
                    icon
                  >
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      ) : (
        <Message warning>
          <Message.Header style={{ textAlign: "center" }}>
            No Result were found
          </Message.Header>
        </Message>
      )}
    </div>
  );
};

export default RestaurantTable;

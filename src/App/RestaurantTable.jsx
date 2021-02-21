import React, { Component } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";

class RestaurantTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  locationData = ({ city, state }) => {
    return city + "," + state;
  };

  render() {
    const { tableData, onPreviousPage, onNextPage } = this.props;
    const { tableList, pagesList, currentPage } = tableData;
    const previousPageLimit = pagesList[0] === currentPage;
    const nextPageLimit = pagesList[pagesList.length - 1] === currentPage;
    return (
      <div>
        <Table celled className="restaurant-table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Restaurant Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableList.map(
              ({ name, id, address1, city, state, telephone, genre }) => (
                <Table.Row key={id}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{address1}</Table.Cell>
                  <Table.Cell>{this.locationData({ city, state })}</Table.Cell>
                  <Table.Cell>{telephone}</Table.Cell>
                  <Table.Cell>{genre}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="5">
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
      </div>
    );
  }
}

export default RestaurantTable;

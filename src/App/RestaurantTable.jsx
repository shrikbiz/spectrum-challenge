import React, { Component } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";

class RestaurantTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { tableData: [], totalPages: 0 };
  // }

  render() {
    let { tableData } = this.props;
    let { tableList, pageCount } = tableData;
    return (
      <>
        <div>
          <Table celled className="restaurant-table">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {console.log(tableList)}
            {tableList.map((restaurant) => (
              <Table.Body key={restaurant.id}>
                <Table.Row>
                  <Table.Cell>{restaurant.name}</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </>
    );
  }
}

export default RestaurantTable;

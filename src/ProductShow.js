import React, { Component } from "react";
import { Header, Segment, Icon, Grid, Input, Table } from "semantic-ui-react";

import ChangeItem from "./ChangeItem";

class ProductShow extends Component {
  render() {
    const { product, changes } = this.props;
    const renderedChanges = changes.map((change) => {
      return <ChangeItem change={change} key={change._id}/>;
    });

    return (
      <Segment padded raised>
        <Grid stackable>
          <Grid.Column width="5">
            <Header as="h2" dividing>
              <Icon name="list" />
              <Header.Content>Product Information</Header.Content>
            </Header>
            <Input
              size="large"
              label="Name"
              placeholder=""
              value={product.name}
              fluid
              className="my-5"
            />
            <Input
              size="large"
              label="Quantity"
              placeholder=""
              value={product.quantity}
              fluid
              className="my-5"
            />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2" dividing>
              <Icon name="list" />
              <Header.Content>Product Change History</Header.Content>
            </Header>
            <Table celled size="large" stackable striped textAlign="center">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Sold To</Table.HeaderCell>
                  <Table.HeaderCell>+/-</Table.HeaderCell>
                  <Table.HeaderCell>Quantity after -/+ Change</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{renderedChanges}</Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default ProductShow;

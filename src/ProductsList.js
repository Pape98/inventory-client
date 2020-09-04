import React, { Component } from "react";
import { Header, Segment, Table } from "semantic-ui-react";

import ProductItem from "./ProductItem";

class ProductsList extends Component {
  render() {
    const products = this.props.products.map((p) => {
      return (
        <ProductItem
          product={p}
          key={p._id}
          showProduct={this.props.showProduct}
          deleteProduct={this.props.deleteProduct}
        />
      );
    });

    return (
      <Segment padded raised>
        <Header textAlign="center" as="h2" dividing>
          My Products
        </Header>
        <Table celled size="large" stackable striped textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{products}</Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default ProductsList;

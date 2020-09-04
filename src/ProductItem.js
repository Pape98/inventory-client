import React, { Component } from 'react';
import { Table } from "semantic-ui-react";

class ProductItem extends Component {

  showProduct = () => {
    this.props.showProduct(this.props.product._id)
  }
  deleteProduct = () => {
    this.props.deleteProduct(this.props.product._id)
  }
  render() {
    const {product} = this.props;

    return (
      <Table.Row>
      <Table.Cell>{product.name}</Table.Cell>
      <Table.Cell>{product.quantity}</Table.Cell>
      <Table.Cell><div onClick={this.showProduct} className="has-cursor-pointer has-hover-blue">View</div></Table.Cell>
      <Table.Cell><div onClick={this.deleteProduct}  className="has-cursor-pointer has-hover-red">Delete</div></Table.Cell>
    </Table.Row>
    );
  }
}

export default ProductItem;


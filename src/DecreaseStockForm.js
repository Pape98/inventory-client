import React, { Component } from "react";
import { Form, Header, Segment } from "semantic-ui-react";
import server from "./apis/server";

class DecreaseStockForm extends Component {
  state = { name: "", quantity: 0, soldTo: "" };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = () => {
    const { name, quantity, soldTo } = this.state;
    const product = { name, quantity, soldTo };

    server
      .post("/products/decrease", product)
      .then((res) => {
        this.props.getProducts();
        this.props.getProduct(res.data);
        this.props.getChanges(res.data);
        this.setState({ name: "", quantity: 0, soldTo: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const options = this.props.products.map((p) => {
      return { key: p._id, text: p.name, value: p.name };
    });

    const { name, quantity, soldTo } = this.state;
    return (
      <Segment padded raised>
        <Header textAlign="center" as="h2" dividing>
          Decrease Stock
        </Header>
        <Form size="large" onSubmit={this.onSubmit}>
          <Form.Select
            fluid
            label="Name"
            options={options}
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <Form.Input
            label="Sold To"
            name="soldTo"
            type="text"
            onChange={this.handleChange}
            value={soldTo}
          />
          <Form.Input
            label="Decrease By"
            name="quantity"
            type="number"
            onChange={this.handleChange}
            value={quantity}
          />
          <p className="is-centered">
            <button className="ui primary large button">Decrease</button>
          </p>
        </Form>
      </Segment>
    );
  }
}

export default DecreaseStockForm;

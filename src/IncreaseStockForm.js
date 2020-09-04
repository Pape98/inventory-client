import React, { Component } from "react";
import { Form, Header, Segment } from "semantic-ui-react";

import server from "./apis/server";

class IncreaseStockForm extends Component {
  state = { name: "", quantity: 0 };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = () => {
    const { name, quantity } = this.state;
    const product = { name, quantity };

    server
      .post("/products/increase", product)
      .then((res) => {
        this.props.getProducts();
        this.props.getProduct(res.data);
        this.props.getChanges(res.data)
        this.setState({ name: "", quantity: 0 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const options = this.props.products.map((p) => {
      return { key: p._id, text: p.name, value: p.name };
    });
    const { name, quantity } = this.state;

    return (
      <Segment padded raised>
        <Header textAlign="center" as="h2" dividing>
          Increase Stock
        </Header>
        <Form size="large" onSubmit={this.onSubmit}>
          <Form.Select
            fluid
            label="Name"
            name="name"
            options={options}
            onChange={this.handleChange}
            value={name}
          />
          <Form.Input
            label="Increase By"
            name="quantity"
            type="number"
            onChange={this.handleChange}
            value={quantity}
          />
          <p className="is-centered">
            <button className="ui primary large button">Increase</button>
          </p>
        </Form>
      </Segment>
    );
  }
}

export default IncreaseStockForm;

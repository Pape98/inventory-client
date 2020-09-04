import React, { Component } from "react";
import { Form, Header, Segment } from "semantic-ui-react";

import server from "./apis/server";

class CreateProductForm extends Component {
  state = { name: ""};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = () => {
    const { name } = this.state;
    const product = { name };
    server
      .post("/products", product)
      .then((res) => {
        this.props.getProducts();
        this.setState({ name: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name } = this.state;
    return (
      <Segment padded raised>
        <Header textAlign="center" as="h2" dividing>
          Create Product
        </Header>
        <Form size="large" onSubmit={this.onSubmit}>
          <Form.Input
            label="Name"
            name="name"
            type="text"
            onChange={this.handleChange}
            value={name}
          />
          <p className="is-centered">
            <button className="ui primary large button">Create</button>
          </p>
        </Form>
      </Segment>
    );
  }
}

export default CreateProductForm;

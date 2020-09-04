import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";

import TopMenu from "./TopMenu";
import IncreaseStockForm from "./IncreaseStockForm";
import DecreaseStockForm from "./DecreaseStockForm";
import CreateProductForm from "./CreateProductForm";
import ProductsList from "./ProductsList";
import ProductsShow from "./ProductShow";

import server from "./apis/server";

class App extends Component {
  state = { products: [], product: {}, changes: [] };
  componentDidMount = () => {
    this.getProducts();
  };

  getProducts = () => {
    server
      .get("/products")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getChanges = (id) => {
    server
      .get("/products/get/changes/" + id)
      .then((res) => {
        this.setState({ changes: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getProduct = (id) => {
    server
      .get("/products/" + id)
      .then((res) => {
        this.setState({ product: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showProduct = (id) => {
    this.getProduct(id);
    this.getChanges(id);
  };

  deleteProduct = (id) =>{
    server
    .delete("/products/" + id)
    .then((res) => {
      this.setState({ products: res.data });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <TopMenu />
        <Grid className="mx-6 my-5" stackable>
          <Grid.Column width="4">
            <CreateProductForm getProducts={this.getProducts} />
            <IncreaseStockForm
              products={this.state.products}
              getProducts={this.getProducts}
              getChanges={this.getChanges}
              getProduct={this.getProduct}
            />
            <DecreaseStockForm
              products={this.state.products}
              getProducts={this.getProducts}
              getChanges={this.getChanges}
              getProduct={this.getProduct}
            />
          </Grid.Column>
          <Grid.Column width="12">
            <ProductsList
              products={this.state.products}
              showProduct={this.showProduct}
              deleteProduct={this.deleteProduct}
            />
            <ProductsShow
              product={this.state.product}
              changes={this.state.changes}
            />
          </Grid.Column>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;

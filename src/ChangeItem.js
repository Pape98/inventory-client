import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import moment from 'moment';

class ChangeItem extends Component {
  changeType = () => {
    const change = this.props.change;
    if (change.changeType === "Increase") {
      return <Table.Cell positive>{change.change}</Table.Cell>;
    } else if (change.changeType === "Decrease") {
      return <Table.Cell negative>{change.change}</Table.Cell>;
    }
  };

  render() {
    const { change } = this.props;
    const fomatted_date = moment(change.date).format("dddd, MMMM Do YYYY");
    return (
      <Table.Row>
        <Table.Cell positive>{fomatted_date}</Table.Cell>
        <Table.Cell>{change.soldTo}</Table.Cell>
        {this.changeType()}
        <Table.Cell>{change.total}</Table.Cell>
      </Table.Row>
    );
  }
}

export default ChangeItem;

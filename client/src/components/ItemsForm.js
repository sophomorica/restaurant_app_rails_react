import React from 'react';
import {Form, } from "semantic-ui-react"

class ItemForm extends React.Component{

  state = {name:"", price:""}
  
  handleChange = (e) => {
    this.setState({ name: e.target.value, price: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, price} = this.state
    this.props.add(name, price);
    this.setState({ name: "", price: "" });
  }

  render(){
    return(
      
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        label="Menu Item"
        placeholder = "Add Menu Item"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
        <Form.Input 
        label="Menu Price"
        placeholder = "Add Menu Price"
        required
        value={this.state.price}
        onChange={this.handleChange}
        />
      </Form>
      </>
    )
  }
}

export default ItemForm
import React from 'react';
import {Form, } from "semantic-ui-react"

class ItemsForm extends React.Component{

  state = {name:"", price:""}
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, price} = this.state
    this.props.addItem(name, price);
    this.setState({ name: "", price: "" , });
  }

  render(){
    return(
      
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        fluid
        name= "name"
        label="Menu Item"
        placeholder = "Add Menu Item"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
        <Form.Input
        fluid 
        name = "price"
        label="Menu Price"
        placeholder = "Price"
        value={this.state.price}
        onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
      </>
    )
  }
}

export default ItemsForm
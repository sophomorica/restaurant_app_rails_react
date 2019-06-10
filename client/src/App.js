import React from 'react';
import axios from 'axios'
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'
import {Header, Container} from 'semantic-ui-react'


class App extends React.Component{
  state = {menus: [{id:1, name: "TurkeyBacon"}],}
  componentDidMount(){
    // make an api request to get menus
    // set State
  }
  addMenu = (name) =>{
    // make an api post request
    // setState
  }
  updateMenu = (id) =>{
    // api put request
    // set state
  }
  deleteMenu = (id) =>{
    // make api delete request
    // set state
  }
  render(){
    return(
      <>
      <Container>
        <Header as="h1" style={{textAlign:"center"}}>Pat's Bistro</Header>
        <br/>
        <MenuForm add = {this.addMenu}/>
        <br/>
        <br/>
        <MenuList 
        menus={this.state.menus}
        update={this.updateMenu}
        deleteMenu={this.deleteMenu}
        />
      </Container>
      </>
    )
  }

}
export default App;

import React from 'react';
import axios from 'axios'
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'
import {Header, Container} from 'semantic-ui-react'


class App extends React.Component{
  state = {menus: [],}

  componentDidMount(){
    // make an api request to get menus
    // set State
    axios.get("/api/menus")
      .then(res =>{
        this.setState({menus: res.data})
      })
      .catch(err=>{
        console.log(err)
      })
  }
  addMenu = (name) =>{
    // make an api post request
    // setState
    axios.post("/api/menus",{name})
    .then( res =>{
      const {menus} =this.state
      this.setState({menus: [...menus, res.data]})
    })
  }
  updateMenu = (id) =>{
    // api put request
    // set state
    axios.put(`/api/items/${id}`)
    .then( res =>{
      const menus = this.state.menus.map(m=>{
        if(m.id ===id)
        return res.data
        return m
      })
      this.setState({menus})
    })
  }
  updateItem = (id) =>{
    // api put request
    // set state
    axios.put(`/api/items/${id}`)
    .then( res =>{
      const menus = this.state.menus.map(m=>{
        if(m.id ===id)
        return res.data
        return m
      })
      this.setState({menus})
    })
  }
  deleteMenu = (id) =>{
    // make api delete request
    // set state
    axios.delete(`/api/menus/${id}`)
      .then(res =>{
        const {menus} = this.state
        this.setState({menus: menus.filter(m=> m.id !==id)})
      })
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

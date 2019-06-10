import React from "react"
import { Checkbox, Header, Button, Icon, Card } from "semantic-ui-react"
import ItemsForm from "./ItemsForm"
import ItemList from "./ItemList"
import axios from "axios";


class MenuStuff extends React.Component{
  state = {items: [],}
  componentDidMount(menu_id){
    axios.get(`/api/menus/${menu_id}/items`)
    .then(res =>{
      this.setState({items: res.data})
    })
  }
  addItem = (name,price, menu_id)=>{
    debugger
    axios.post(`/api/menus/${menu_id}/items`,{name, price}) 
      .then( res =>{
        const {items} = this.state
        this.setState({items: [...items, res.data]})
      })
  }
  updateItem = (menu_id, id) =>{
    axios.put(`api/menus/${menu_id}/${id}`)
    .then(res =>{
      const items = this.state.items.map(i=>{
        if (i.id ===id)
        return res.data
        return i
      })
      this.setState({items})
    })
  }
  deleteItem = (menu_id, id) =>{
    // make api delete request
    // set state
    axios.delete(`/api/menus/${menu_id}/${id}`)
      .then(res =>{
        const {items} = this.state
        this.setState({items: items.filter(i=> i.id !==id)})
      })
  }

  render(){
    return(
      <Card>
      
      <div>
        <div>
          <Checkbox 
          
          />
          <div>
            <Header as="h2">{this.props.name}</Header>
          </div>
          <ItemsForm addItem = {this.addItem} />
          <ItemList  
          items={this.state.items}
          update={this.updateItem}
          deleteItem={this.deleteItem}
          />
        </div>
        <Button 
        icon
        color="red"
        size = "small"
        onClick={()=> this.props.deleteMenu(this.props.id)}
        >
        <Icon name= "trash"/>      
        </Button>
      
      </div>
        </Card>

    )
  }
}
export default MenuStuff
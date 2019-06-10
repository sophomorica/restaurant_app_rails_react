import React from "react"
import { Checkbox, Header, Button, Icon, Card } from "semantic-ui-react"
import ItemsForm from "./ItemsForm"
import ItemList from "./ItemList"


class Menu extends React.Component{
  state = {items: [{id: 1, name:"salad", price: "$5"}],}
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
    <ItemsForm />
    <ItemList  
     items={this.state.items}
     update={this.updateItem}
     deleteMenu={this.deleteItem}
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




export default Menu

import React from "react"
import { Checkbox, Header, Button, Icon, Card } from "semantic-ui-react"
import ItemsForm from "./ItemsForm"
import ItemList from "./ItemList"

const Menu = ({id, name, update, deleteMenu}) =>(
  <Card>

  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
      
      />
      <div>
        <Header as="h2">{name}</Header>
      </div>
      <ItemsForm />
      <ItemList />
    </div>
    <Button 
    icon
    color="red"
    size = "small"
    onClick={()=> deleteMenu(id)}
    >
    <Icon name= "trash"/>      
    </Button>

  </div>
    </Card>
)
const styles = {
  complete:{
    textDecoration: "line-through",
    color: "orange"
  },
  pointer:{
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }

}


export default Menu

import React from "react"
import { Checkbox, Header, Button, Icon, Card } from "semantic-ui-react"

const Menu = ({id, name, update, deleteMenu}) =>(
  <Card>

  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
      
      />
      <div>
        <Header as="h2">{name}</Header>
      </div>
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

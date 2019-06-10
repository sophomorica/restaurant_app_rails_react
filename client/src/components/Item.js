import React from "react"
import { Checkbox, Header, Button, Icon } from "semantic-ui-react"

const Item =({id, price, name, updateItem, deleteItem})=>(
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
      />
      <div>
        <Header as="h2" style ={{marginLeft: "15px"}}>{ name }</Header>
      </div>
    </div>
    <Button 
    icon
    color="red"
    size="tiny"
    onClick={()=> deleteItem(id)}
    style={{marginLeft: "15px"}}
    >
      <Icon name="trash"/>
    </Button>
  </div>
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
    alignItems: "center"
  }

}

export default Item
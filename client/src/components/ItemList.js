import React from 'react';
import Item from './Item'

const ItemList = ({items, deleteItem, updateItem}) => (
  <div>
  {items.map(item =>
    <Item
    key={item.id}
    {...item}
    updateItem={updateItem}
    deleteItem={deleteItem}
    />
    )}
  </div>
)

export default ItemList
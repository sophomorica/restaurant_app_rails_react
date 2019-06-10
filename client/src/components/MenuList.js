import React from 'react'
import Menu from './Menu'

const MenuList = ({menus, update, deleteMenu}) =>(

  <div>
    {menus.map(menu =>
    <Menu 
    key={menu.id}
    {...menu}
    update = {update}
    deleteMenu={deleteMenu}
    />
    )}
  </div>

)
export default MenuList
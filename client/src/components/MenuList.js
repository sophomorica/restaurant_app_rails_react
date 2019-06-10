import React from 'react'
import MenuStuff from './MenuStuff'

const MenuList = ({menus, update, deleteMenu}) =>(

  <div>
    {menus.map(menu =>
    <MenuStuff 
    key={menu.id}
    {...menu}
    update = {update}
    deleteMenu={deleteMenu}
    />
    )}
  </div>

)
export default MenuList
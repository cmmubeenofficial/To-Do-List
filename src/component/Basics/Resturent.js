import React, { useState } from "react";
import "./Basics.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElm) => {
      return curElm.category;
    })
  ),
  "All"
];


function Resturent() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList)

  const filterItem = (catgrory) => {
    if(catgrory === "All"){
      setMenuData(Menu)
      return
    }
    const updatedList = Menu.filter((curElm) => {
      return curElm.category === catgrory;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem = { filterItem } menuList = { menuList }/>
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Resturent;

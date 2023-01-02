import React, { useState } from "react";
import Header from "./../component/header";

function index() {
  const menus = [
    "Shop",
    "Catalog",
    "Management",
    "Contact",
  ]
  return (
    <>
      <Header data={menus} />
      <div>Shop</div>
    </>
  );
}

export default index;

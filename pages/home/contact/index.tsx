import React, { useState } from "react";
import Header from "./../component/header";

function index() {
  const menus = [
    "Contact",
    "Shop",
    "Catalog",
    "Management",
  ]
  return (
    <>
      <Header data={menus} />
      <div>Contact</div>
    </>
  );
}

export default index;

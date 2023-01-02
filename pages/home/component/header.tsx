import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header(props:any) {
  const [contentData, setContentData] = useState([
    "Catalog",
    "Shop",
    "Management",
    "Contact",
  ]);
  useEffect(() => {
    setContentData(props.data!);
  },[]);


  return (
    <>
      <div className="headerMenu container-fluid">
        <div className="row">
          <div className="content col-5">
            {
            contentData.map((detail: any, index:number) => {
              let classNames = "contentData";
              if (index == 0) {
                classNames = "contentDataActive";
              }
              return (
                <div key={index}>
                  <Link style={{ textDecoration: "none" }} className={classNames} href={`/home/${new String(detail).toLowerCase()}` } ><span>{detail}</span></Link>
                </div>
              );
            })
            }
          </div>
          <div className="nameSite col-2">Bookskuy</div>
          <div className="rightContent col-5">
            <Link style={{ textDecoration: "none" }} href={"/account"}>
              <span>Account</span>
            </Link>
          </div>
        </div>
        <hr />
        <div className="endHeader"></div>
      </div>
    </>
  );
}

export default Header;

import axios from "axios";
import { url } from "inspector";
import Image from "next/image";
import React, { useState } from "react";
import Header from "./../component/header";

function index() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [images, setImages] = useState("");
  const [link, setLink] = useState("");
  const menus = ["Management", "Shop", "Catalog", "Contact"];

  const handleInput = async() =>{
    if (title == "" || author== "" || language== "" || images == ""|| link== ""){
      alert("Data Kosong")      
    }else{
      let mapper = {
        "title": title,
        "author": author,
        "language": language,
        "imageKey": images,
        "path": link
      }
      await axios.post("https://qks0be.deta.dev/book/books",mapper).then((resp)=>{
        alert("success")
        setTitle("")
        setAuthor("")
        setLanguage("")
        setImages("")
        setLink("")
      })
    }
  }
  return (
    <>
      <Header data={menus} />
      <div className="menu">
        <div className="headingCatalog">
          <div className="heading">MANAGEMENT</div>
          <p>Browse Our Extensive Book Catalog</p>
        </div>
      </div>
      <div className="managementMenu">
        <div className="inputBook">
          <div>
            <span>Title</span>
            <input
              type="text"
              placeholder="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <span>Author</span>
            <input
              type="text"
              placeholder="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <span>Language</span>
            <input
              type="text"
              placeholder="language"
              required
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div>
            <span>Images</span>
            <input
              type="text"
              placeholder="images"
              required
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <div>
            <span>Link</span>
            <input
              type="text"
              placeholder="link"
              required
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <button onClick={()=> handleInput()}>Save</button>
        </div>
        <div className="mid"></div>
        <div className="previewBook">
          <Image src={images} height={300} width={200} alt="images" />
        </div>
      </div>
    </>
  );
}

export default index;

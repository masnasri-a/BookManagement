import Image from "next/image";
import React from "react";

function Card(props: any) {
  return (
    <div>
      <div className="cardBook">
        <div className="imageCard">
          <Image src={props.images} width={120} height={170} alt="Cover" />
        </div>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;

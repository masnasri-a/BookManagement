import Image from "next/image";
import React from "react";

function Card(props: any) {
  return (
    <div>
      <div className="cardBook">
        <div className="imageCard">
          <Image src="http://libgen.is/covers/293000/215814865548f1a9cd4380e421fccdaf-d.jpg" width={120} height={170} alt="Cover" />
        </div>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;

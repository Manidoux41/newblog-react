import React from "react";
import { Link } from "react-router-dom";

function Card({ cover, title }) {
  return (
    <Link
      id="card"
      className="w-[340px] h-[340px] mx-auto justify-self-center self-center relative rounded-md overflow-hidden"
    >
      <img src={cover} alt="cover" className="w-[100%] h-[100%] object-cover" />
      <h3 className="text-white text-lg absolute left-2 bottom-2 z-10">
        {title}
      </h3>
    </Link>
  );
}

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article>
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single book" />
      </div>
    </article>
  );
};

export default Room;

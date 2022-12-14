import React from "react";
import "./TrendingBook.css";

const TrendingBook = ({ product }) => {
  const { name, picture } = product;
  return (
    <div className=" gap-6 bg-white shadow-xl">
      <figure>
        <img className="w-56 h-56" src={picture} alt="Shoes" />
      </figure>
      <div className="text-center button">
        {name === "Borrow" ? (
          <button className="details-button">{name}</button>
        ) : "" || name === "Preview" ? (
          <button className="details-preview-button text-xl ">{name}</button>
        ) : "" || name === "Not in Library" ? (
          <button className="details-not-button text-xl ">{name}</button>
        ) : "" || name === "Join WaitList" ? (
          <button className="details-button">{name}</button>
        ) : "" || name === "Checked Out" ? (
          <button className="details-not-button text-xl ">{name}</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TrendingBook;

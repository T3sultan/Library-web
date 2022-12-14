import React from "react";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";

const Librarys = () => {
  return (
    <div className=" bg-white p-4">
      <div className="p-4 flex">
        <h4 className="around-title">Around the Library</h4>
        <div className="mt-2 ms-2">
          <span>
            Here's what's happened over the last 28 days. More
            <a href=".." className="ms-1">
              recent changes.
            </a>
          </span>
        </div>
      </div>
      <div className="flex gap-6 justify-around">
        <div className=" grid col-lg-2 ms-4">
          <img className="  " src={image1} alt="" />
          <div className="ms-5 mt-4">
            <p className="">4,095,566</p>
            <p className="">UNIQUE VISITORS</p>
          </div>
        </div>
        <div className="library grid col-lg-2 ms-4">
          <img className="ms-4" src={image2} alt="" />
          <div className="ms-5 mt-2">
            <p className="visitors">4,095,566</p>
            <p className="unique">UNIQUE VISITORS</p>
          </div>
        </div>
        <div className="library col-lg-2 ms-4">
          <img className="ms-4" src={image3} alt="" />
          <div className="ms-5 mt-2">
            <p className="visitors">4,095,566</p>
            <p className="unique">UNIQUE VISITORS</p>
          </div>
        </div>
        <div className="library col-lg-2 ms-4">
          <img className="ms-4" src={image4} alt="" />
          <div className="ms-5 mt-2">
            <p className="visitors">4,095,566</p>
            <p className="unique">UNIQUE VISITORS</p>
          </div>
        </div>
        <div className="library col-lg-2 ms-4">
          <img className="ms-4" src={image5} alt="" />
          <div className="ms-5 mt-2">
            <p className="visitors">4,095,566</p>
            <p className="unique">UNIQUE VISITORS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Librarys;

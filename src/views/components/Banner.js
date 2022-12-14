import React from "react";
// import { SwiperSlide, Swiper } from "swiper";
import image1 from "../../assets/feedback.png";
import image2 from "../../assets/fulltext.png";
import image3 from "../../assets/librarian.png";
import image4 from "../../assets/library_explorer.png";
import image5 from "../../assets/read.png";
import image6 from "../../assets/track.png";
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const items = [
    {
      img: image1,
      title: "Read Free Library Books Online",
      des: "Millions of books available through controlled digital lending",
    },
    {
      img: image2,
      title: "Read Free Library Books Online",
      des: "Millions of books available through controlled digital lending",
    },
    {
      img: image3,
      title: "Read Free Library Books Online",
      des: "Millions of books available through controlled digital lending",
    },
    {
      img: image4,
      title: "Read Free Library Books Online",
      des: "Millions of books available through controlled digital lending",
    },
    {
      img: image5,
      title: "Read Free Library Books Online",
      des: "Millions of books available through controlled digital lending",
    },
    {
      img: image6,
      title: "Read Free Library Books Online",
      des: "Millions of books available through controlled digital lending",
    },
  ];
  return (
    <div className=" bg-white border rounded">
      <h2 className=" text-blue-400 text-start ml-4 mt-4">
        {" "}
        Welcome to Open Library
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="carousel">
            <div className="flex border p-5  bg-white items-center ">
              <div className="slider-image">
                <img
                  className="w-24"
                  src="https://openlibrary.org/static/images/onboarding/read.png"
                  alt=""
                />
              </div>
              <div className="m-3">
                <h6 className=" text-l ">Read Free Library books Online</h6>
                <p className=" text-sm ">
                  Millions of Books Available through controlled Digital Lending
                </p>
              </div>
            </div>
            <div className="flex border p-5  bg-white items-center ">
              <div className="slider-image">
                <img
                  src="https://openlibrary.org/static/images/onboarding/track.png"
                  alt=""
                />
              </div>
              <div className="m-3">
                <h6 className=" text-l ">Read Free Library books Online</h6>
                <p className=" text-sm ">
                  Millions of Books Available through controlled Digital Lending
                </p>
              </div>
            </div>
            <div className="flex border p-5  bg-white items-center">
              <div className="slider-image">
                <img
                  src="https://openlibrary.org/static/images/onboarding/library_explorer.png"
                  alt=""
                />
              </div>
              <div className="m-3">
                <h6 className=" text-l ">Read Free Library books Online</h6>
                <p className=" text-sm ">
                  Millions of Books Available through controlled Digital Lending
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" carousel">
            <div className="flex border p-5  bg-white items-center">
              <div className="slider-image">
                <img
                  src="https://openlibrary.org/static/images/onboarding/fulltext.png"
                  alt=""
                />
              </div>
              <div className="ms-3">
                <h6 className="text-l">Read Free Library books Online</h6>
                <p className="text-sm">
                  Millions of Books Available through controlled Digital Lending
                </p>
              </div>
            </div>
            <div className="flex border p-5  bg-white items-center">
              <div className="slider-image">
                <img
                  src="https://openlibrary.org/static/images/onboarding/librarian.png"
                  alt=""
                />
              </div>
              <div className="ms-3">
                <h6 className="text-l">Read Free Library books Online</h6>
                <p className="text-sm">
                  Millions of Books Available through controlled Digital Lending
                </p>
              </div>
            </div>
            <div className="flex border p-5  bg-white items-center">
              <div className="slider-image">
                <img
                  src="https://openlibrary.org/static/images/onboarding/feedback.png"
                  alt=""
                />
              </div>
              <div className="m-3">
                <h6 className="text-l">Read Free Library books Online</h6>
                <p className="text-sm">
                  Millions of Books Available through controlled Digital Lending
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

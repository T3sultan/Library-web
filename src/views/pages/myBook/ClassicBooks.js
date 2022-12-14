import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useBooks from "../../../hooks/useBooks";
import TrendingBook from "../TrendingBooks/TrendingBook";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const ClassicBooks = () => {
  const [books] = useBooks();
  return (
    <div className=" bg-white border ">
      <h5 className="  pt-4 underline font-bold  text-gray-500 pb-3 ml-4">
        Classic Books
      </h5>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex container flex-row mt-0 gap-4 m-6 p-4">
            {books
              .filter(book => book.category === "classic")
              .map(product => (
                <TrendingBook
                  product={product}
                  key={product._id}
                ></TrendingBook>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  flex-row gap-4 m-6 p-4">
            {books
              .filter(book => book.category === "classic")
              .map(product => (
                <TrendingBook
                  product={product}
                  key={product._id}
                ></TrendingBook>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  flex-row gap-4 m-6 p-4">
            {books
              .filter(book => book.category === "classic")
              .map(product => (
                <TrendingBook
                  product={product}
                  key={product._id}
                ></TrendingBook>
              ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClassicBooks;

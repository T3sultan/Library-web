import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useBooks from "../../../hooks/useBooks";
import TrendingBook from "../TrendingBooks/TrendingBook";

const Thrillers = () => {
  const [books] = useBooks();
  return (
    <div className=" bg-white border ">
      <h5 className="  pt-4 underline font-bold  text-gray-500 pb-3 ml-4">
        Trillers
      </h5>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex container flex-row mt-0 gap-4 m-6 p-4">
            {books
              .filter(book => book.category === "thrillers")
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
              .filter(book => book.category === "thrillers")
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
              .filter(book => book.category === "thrillers")
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

export default Thrillers;

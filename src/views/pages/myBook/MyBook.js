import React from "react";
import Banner from "../../components/Banner";
import "../../components/NabBar/Navbar.css";
import TrendingBooks from "../TrendingBooks/TrendingBooks";
import About from "./About";
import BooksLoves from "./BooksLoves";
import ClassicBooks from "./ClassicBooks";
import Footer from "./Footer";
import Kids from "./Kids";
import Librarys from "./Librarys";
import RecentlyReturned from "./RecentlyReturned";
import Romance from "./Romance";
import TextBook from "./TextBook";
import Thrillers from "./Thrillers";
const MyHome = () => {
  return (
    <div className=" ">
      <Banner />
      <TrendingBooks />
      <ClassicBooks />
      <BooksLoves />
      <RecentlyReturned />
      <Romance />
      <Kids />
      <Thrillers />
      <TextBook />
      <About />
      <Footer />
    </div>
  );
};

export default MyHome;

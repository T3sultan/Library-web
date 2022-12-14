import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer p-10 container text-base-content">
        <div>
          <span className=" font-bold text-gray-800">Open Library</span>
          <a className="link   ">Vision</a>
          <a className="link ">Volunteer</a>
          <a className="link">Partner With Us</a>
          <a className="link ">Careers</a>
          <a className="link">Blog</a>
          <a className="link ">Terms of Service</a>
          <a className="link ">Donate</a>
        </div>
        <div>
          <span className="font-bold text-gray-800">Discover</span>
          <a className="link ">About us</a>
          <a className="link ">Contact</a>
          <a className="link ">Jobs</a>
          <a className="link ">Press kit</a>
          <a className="link ">Jobs</a>
          <a className="link ">Press kit</a>
        </div>
        <div>
          <span className="font-bold text-gray-800">Develop</span>
          <a className="link   ">Vision</a>
          <a className="link ">Volunteer</a>
          <a className="link">Partner With Us</a>
          <a className="link ">Careers</a>
          <a className="link">Blog</a>
          <a className="link ">Terms of Service</a>
          <a className="link ">Donate</a>
        </div>
        <div>
          <span className="font-bold text-gray-800">Help</span>
          <a className="link ">About us</a>
          <a className="link ">Contact</a>
          <a className="link ">Jobs</a>
          <a className="link ">Press kit</a>
          <a className="link ">Jobs</a>
          <a className="link ">Press kit</a>
        </div>
        <div>
          <span className="font-bold text-gray-800">
            Change Website Language
          </span>
          <a className="link   ">Vision</a>
          <a className="link ">Volunteer</a>
          <a className="link">Partner With Us</a>
          <a className="link ">Careers</a>
          <a className="link">Blog</a>
          <a className="link ">Terms of Service</a>
          <a className="link ">Donate</a>
        </div>
      </footer>
      <div className="divider"></div>
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
        <div className="flex flex-col w-full border-opacity-50"></div>
        <div className="flex footer-bottom">
          <div className="flex justify-center items-center mt-3">
            <Icon width="30px" icon="ic:baseline-library-books" />
          </div>
          <div className="m-2 row">
            <p className="col-lg-10">
              Open Library is an initiative of the{" "}
              <a href="..">Internet Archive</a>, a 501(c)(3) non-profit,
              building a digital library of Internet sites and other cultural
              artifacts in digital form. Other <a href="..">projects</a> include
              the <a href="..">Wayback Machine, archive.org</a> and{" "}
              <a href="..">archive-it.org</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

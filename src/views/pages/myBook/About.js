import React from "react";

const About = () => {
  return (
    <div className=" bg-white p-4">
      <div
        className="flex gap-3
       align-items-center"
      >
        <div className="about-project col-lg-6">
          <h4 className="font-bold t text-gray-700 text-3xl	">
            About the Project
          </h4>
          <p className="text-xl mt-3">
            Open Library is an open, editable library catalog,
            <br /> building towards a web page for every book ever <br />{" "}
            published.{" "}
            <a className="link text-blue-600" href="..">
              More
            </a>
          </p>
          <p className=" text-sm mt-3">
            Just like Wikipedia, you can contribute new information or
            corrections to the catalog. <br />
            You can browse by subjects, authors or lists members have created.
            If <br /> you love books, why not help build a library?
          </p>
        </div>
        <div className="col-lg-6">
          <h5>
            <a
              className=" link text-blue-400 text-2xls font-bold mt-3"
              href=".."
            >
              Latest Blog Posts
            </a>
          </h5>
          <p className="mt-4">
            <a className="link" href="..">
              2022 Review
            </a>{" "}
            <i className="link">- November 23, 2022</i>
          </p>
          <p className="link mt-3">
            <a href="..">Search for Books in your Reading Log</a>
            <i>- November 23, 2022</i>
          </p>
          <p className="link mt-2">
            <a href="..">Improvements to the Main Navigation</a>
            <i>- November 22, 2022</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

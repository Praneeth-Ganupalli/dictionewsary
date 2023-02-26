import React from "react";
import "./Home.css";
import news from "../../assets/images/news2.jpg";
import { Link } from "react-router-dom";
function HomeContent() {
  return (
    <>
      <div className="container p-5 text-white main-content">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src={news} alt="News" className="img img-fluid" />
          </div>
          <div className="col-md-5">
            <h2>Dictionewsary</h2>
            <p className="lead my-3">
              Dictionewsary is an all-in-one app that combines the best of a
              dictionary and a news platform. With Dictionewsary, you can browse
              the latest news articles from top sources and improve your
              vocabulary skills at the same time. The app features a
              user-friendly interface, intuitive search functions, and curated
              word lists to help you easily access and learn new words. Whether
              you're a language enthusiast or a news junkie, Dictionewsary has
              something for everyone.
            </p>
            <section className="mt-3 d-flex">
              <Link to="/news">
                <button className="btn btn-block btn-light me-2">
                  Explore News
                </button>
              </Link>
              <Link to="/dictionary">
                <button className="btn btn-block btn-custom-dictionary me-2">
                  Search Dictionary
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;

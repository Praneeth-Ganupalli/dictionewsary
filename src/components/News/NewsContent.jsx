import React, { useCallback, useEffect, useState } from "react";
import NewsNav from "./NewsNav";
import NewsContentItem from "./NewsContentItem";
import axios from "axios";
import { NEWS_FETCH_URL } from "../../utils/constants";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import "./News.css";
function NewsContent() {
  const [newskw, setNewsKw] = useState("World");
  const [newsData, setNewsData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const incrPage = useCallback(() => {
    setPageNum((prevPage) => (prevPage === 50 ? 1 : prevPage + 1));
  }, []);
  const dcrPage = useCallback(() => {
    setPageNum((prevNum) => (prevNum === 1 ? 50 : prevNum - 1));
  }, []);
  const removeNewsItem = (id) => {
    const updatedNewsContent = newsData.filter((nw) => nw.id !== id);
    setNewsData(updatedNewsContent);
  };
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${NEWS_FETCH_URL}?query=${newskw}&page=${pageNum - 1}`
        );
        const { data } = response;
        if (data && data.hits && data.hits.length) {
          const newsContent = data.hits.map((dt) => {
            return {
              title: dt.title,
              id: dt.objectID,
              url: dt.url,
              points: dt.points,
              author: dt.author,
              comments: dt.num_comments,
            };
          });
          setNewsData(newsContent);
        }
      } catch (er) {
        console.error("unable to fetch news");
      } finally {
        setLoading(false);
      }
    };
    const getData = setTimeout(fetchNews,500);
    return ()=>clearTimeout(getData);
  }, [pageNum, newskw]);
  return (
    <div className="container p-5 news-main-content">
        <header className="d-flex">
        <h2 className="h1 text-info">Search News</h2>
        <Link to="/" className="ms-auto text-decoration-none">
        <h3 className="text-info ms-auto fs-6">Back to Home</h3>
        </Link>
        </header>
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          value={newskw}
          onChange={(e) => {
            setNewsKw(e.target.value);
            setPageNum(1);
          }}
        />
      </div>
      <section className="change-page">
        <NewsNav curPage={pageNum} onIncr={incrPage} onDcr={dcrPage} />
      </section>
      {isLoading &&  <section className="news-loader">
        <Loader />
      </section> }
      {!isLoading && newsData.length > 0 && (
        <section className="mt-5 news-container ">
          {newsData.map((newsDt) => {
            return (
              <NewsContentItem
                newsItem={newsDt}
                key={newsDt.id}
                onRemove={removeNewsItem}
              />
            );
          })}
        </section>
      )}
    </div>
  );
}

export default NewsContent;

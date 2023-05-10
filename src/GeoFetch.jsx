import React, { useEffect, useState, useRef } from "react";

const GeoFetch = () => {
  const [news, setNews] = useState([]);
  const [getData, setGetData] = useState(false);
  const [url, setUrl] = useState("news");
  const endPoints = {
    news: { url: "http://api.geonet.org.nz/news/geonet" },
    strong: {
      url: "http://api.geonet.org.nz/geonet/intensity/strong/processed/",
    },
    intensity: { url: "http://api.geonet.org.nz/intensity?type=measured" },
  };

  console.log("the fetch URL", endPoints.intensity.url);
  const fetchData = () => {
    fetch(endPoints.news.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data);
      });
  };
  const newsKeys = Object.entries(news);

  useEffect(() => {
    fetchData();
  }, [getData]);

  const fetchNewsHandler = () => {
    // setGetData((prevCheck) => !prevCheck);
    setGetData(true);
  };
  const urlHandler = (event) => {
    console.log("url button", buttonRef.current.value);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={fetchNewsHandler}>{getData} Refresh Data</button>
          <button
            onClick={() => {
              ref = { buttonRef };
              urlHandler(endPoints.news.url);
            }}
          >
            Get News on Quakes
          </button>
          <button>Get Intensity of Quakes</button>
        </div>
      </div>
      <div>
        <h2>Results</h2>
        {newsKeys.length > 0 && (
          <ul>
            {newsKeys[2][1].map((item) => (
              <li key={item.title}>
                {item.title} <span> - {item.tag} </span>
                <span> - {item.type} </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default GeoFetch;

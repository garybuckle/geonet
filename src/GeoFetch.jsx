import React, { useEffect, useState, useRef } from "react";
import News from "./components/News";

const GeoFetch = () => {
  const [apiData, setApiData] = useState([]);
  const [getData, setGetData] = useState(false);
  const [url, setUrl] = useState("news");
  const endPoints = {
    news: { url: "http://api.geonet.org.nz/news/geonet" },
    strong: {
      url: "http://api.geonet.org.nz/geonet/intensity/strong/processed/",
    },
    intensity: { url: "http://api.geonet.org.nz/intensity?type=measured" },
  };
  const fetchUrl = endPoints.news.url;
  const fetchData = () => {
    fetch(fetchUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
      });
  };

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

  const newsKeys = Object.entries(apiData);
  const intensityKeys = Object.entries(apiData);
  // Log out what's being passed
  console.log("Raw Data", apiData);
  fetchUrl == endPoints.intensity.url
    ? console.log("Intensity Data", intensityKeys)
    : null;
  fetchUrl == endPoints.news.url ? console.log("News", newsKeys) : null;

  return (
    <>
      <div>
        <div>
          <button onClick={fetchNewsHandler}> Refresh Data</button>
          <button>Get News on Quakes</button>
          <button>Get Intensity of Quakes</button>
        </div>
      </div>
      <div>
        <h2>Results</h2>
        {fetchUrl == endPoints.news.url ? (
          <News newsKeys={newsKeys} />
        ) : (
          "Incorrect News Url"
        )}
        {fetchUrl == endPoints.intensity.url ? (
          <News intensityKeys={intensityKeys} />
        ) : (
          "Incorrect Intensity Url"
        )}
      </div>
    </>
  );
};

export default GeoFetch;

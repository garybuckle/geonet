import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
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
    axios.get(fetchUrl).then((response) => {
      setApiData(response.data.feed);
    });
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const fetchNewsHandler = () => {
    // setGetData((prevCheck) => !prevCheck);
    setGetData(true);
  };

  const newsButtonHandler = () => {
    setUrl("http://api.geonet.org.nz/news/geonet");
  };
  const intensityButtonHandler = () => {
    setUrl("http://api.geonet.org.nz/intensity?type=measured");
  };

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
        {console.log("Raw api data ", { apiData })}

        <h2>Results</h2>
        {fetchUrl == endPoints.news.url ? (
          <News apiData={apiData} />
        ) : (
          "No News Url supplied"
        )}
        {fetchUrl == endPoints.intensity.url ? (
          <Intensity apiData={apiData} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default GeoFetch;

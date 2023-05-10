import React, { useEffect, useState } from "react";

const GeoFetch = () => {
  const [news, setNews] = useState([]);
  const [getData, setGetData] = useState(false);
  const endPoints = {
    news: { url: "http://api.geonet.org.nz/news/geonet" },
    strong: {
      url: "http://api.geonet.org.nz/geonet/intensity/strong/processed/2020p666015",
    },
  };

  const fetchData = () => {
    fetch("http://api.geonet.org.nz/news/geonet")
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
    setGetData((prevCheck) => !prevCheck);
  };

  return (
    <>
      <div>
        {console.log("Rendered NEWS Array", newsKeys)}
        {console.log("deeper", newsKeys[2])}

        {newsKeys.length > 0 && (
          <ul>
            {newsKeys[2][1].map((item) => (
              <li key={item.title}>
                {item.title} <span> {item.tag} </span>
                <span>{item.type} </span>
              </li>
            ))}
          </ul>
        )}

        <button onClick={fetchNewsHandler}>
          {getData ? "Stop Getting..." : "Get the News"}
        </button>
      </div>
    </>
  );
};

export default GeoFetch;

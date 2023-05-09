import React, { useEffect, useState } from 'react';

const GeoFetch = () => {
  const [news, setNews] = useState([]);
  const [getData, setGetData] = useState(false);

  console.log(getData);

  const fetchData = () => {
    fetch('http://api.geonet.org.nz/news/geonet')
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
    <div>
      {console.log('Rendered NEWS Array', newsKeys)}
      {console.log('deeper', newsKeys[2])}

      {newsKeys.length > 0 && (
        <ul>
          {newsKeys[2][1].map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      )}

      <button onClick={fetchNewsHandler}>
        {getData ? 'Stop' : 'Get the News'}
      </button>
    </div>
  );
};

export default GeoFetch;

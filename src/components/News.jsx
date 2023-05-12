const News = ({ apiData }) => {
  return (
    <>
      <div>
        <h2>Shows the News on quakes</h2>
        {/* 
        {apiData[page][feed].length > 0 && (
          <ul>
            {apiData.map((item) => (
              <li key={item.page.feed.title}>
                {item.title} <span> - {item.tag} </span>
                <span> - {item.type} </span>
              </li>
            ))}
          </ul>
        )}  */}
      </div>
    </>
  );
};

export default News;

const News = ({ apiData }) => {
  return (
    <>
      <div>
        <h2>Shows the News on quakes</h2>
        {apiData.map((item) => (
          <li>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
          </li>
        ))}
        <ul></ul>
      </div>
    </>
  );
};

export default News;

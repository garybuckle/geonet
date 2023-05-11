const News = ({ newsKeys }) => {
  return (
    <>
      {console.log(
        { newsKeys },
        "New Passed ",
        "length = ",
        { newsKeys }.length
      )}
      <div>
        <h2>Shows the News on quakes</h2>
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

export default News;

const News = ({ apiData }) => {
  const apiArray = apiData.feed;
  console.log('Array', apiArray);

  return (
    <>
      <div>
        <h2>Shows the News on quakes</h2>
        <ul>
          {apiArray.map((item) => (
            <li key={item.title}>
              {item.title} <span> - {item.tag} </span>
              <span> - {item.type} </span>
            </li>
          ))}
        </ul>

        {/* 
        {console.log('The array ', apiDataArray[1])}
        {console.log('The object ', apiData.feed)} */}
      </div>
    </>
  );
};

export default News;

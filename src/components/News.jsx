const News = ({ apiData }) => {
  apiData.forEach((item) => {
    for (let key in item) {
      console.log(`${key}: ${item[key]}`);
    }
  });
  return (
    <>
      <div>
        <h2>Shows the News on quakes</h2>
        {}
        <ul></ul>
      </div>
    </>
  );
};

export default News;

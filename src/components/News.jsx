const News = ({ apiData }) => {
  const apiFeed = apiData.feed;
  console.log("feed", apiFeed);
  // console.log("Titles", apiData.feed[0].title);
  // console.log("Keys", Object.keys(apiData));
  // for (let [key, value] of Object.entries(apiData)) {
  //   console.log("Entries", `${key}:${value}`);
  // }
  // apiFeed.map((item) => {
  //   console.log(item);
  // });

  // Object.entries(apiData).forEach(([key, value]) => {
  //   console.log("Entries", `${key} ${value}`);
  // });

  // const apiFeedTitles = apiData.feed.title;
  // const apiArray = Object.entries(apiFeed);
  // console.log("apiFeed", apiFeed);

  return (
    <>
      <div>
        <h2>Shows the News on quakes</h2>
        <ul></ul>
      </div>
    </>
  );
};

export default News;

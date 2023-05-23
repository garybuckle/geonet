const data = {
  page: 1,
  total: 1075,
  feed: [
    {
      title: "Landslide warning as heavy rain expected across the country.",
      type: "newsStory",
      tag: "News",
      val: 0,
      published: "2023-05-09T03:00:00Z",
      link: "https://www.geonet.org.nz/news/7iXw4yBatVAbBP0rkcpr5l",
      mlink: "https://www.geonet.org.nz/news/7iXw4yBatVAbBP0rkcpr5l",
    },
    {
      title:
        "Checking in on our active Kāpiti and Manawatū slow slip earthquakes ",
      type: "newsStory",
      tag: "News",
      val: 0,
      published: "2023-05-05T02:40:00Z",
      link: "https://www.geonet.org.nz/news/6vAA6FVHI9ojGmkONfsoOi",
      mlink: "https://www.geonet.org.nz/news/6vAA6FVHI9ojGmkONfsoOi",
    },
    {
      title:
        "Te Wai ā-moe (Crater Lake) is cooling, volcanic unrest remains low for Mt Ruapehu. The Volcanic Alert Level remains at Level 1.  ",
      type: "vab",
      tag: "Volcanic Activity Bulletin",
      val: 1,
      published: "2023-05-02T22:00:00Z",
      link: "https://www.geonet.org.nz/vabs/1S1ZT4HHjfPYXZHdK6affE",
      mlink: "https://www.geonet.org.nz/vabs/1S1ZT4HHjfPYXZHdK6affE",
    },
  ],
};

const dataFeed = data.feed;
// console.log("feed", dataFeed);

// iterate through the feed

dataFeed.map((feedObj) => {
  console.log("feedObj Title", feedObj.title, feedObj.link);
});

import Parser from "rss-parser";


export async function getFeed(feedUrl: string) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  console.log(feed)

  return feed;
}
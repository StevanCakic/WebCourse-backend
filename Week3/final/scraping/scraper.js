const cheerio = require("cheerio");
const axios = require("axios").default;

const fethHtml = async url => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.error(
      `ERROR: An error occurred while trying to fetch the URL: ${url}`
    );
  }
};

const scrapVijesti = async () => {
  const steamUrl =
    "https://vijesti.me";

  const html = await fethHtml(steamUrl);

  const $ = cheerio.load(html);

  const searchResults = $("body").find(".latestNews > .latestNews__item a").toArray().map((x) => { return $(x).text()});

  console.log(searchResults)

  return searchResults

};

module.exports = scrapVijesti;

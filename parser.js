const tress = require("tress");
const needle = require("needle");
const cheerio = require("cheerio");
const fs = require("fs");
const translate = require("@iamtraction/google-translate");
const { exec } = require("child_process");

// const apps = JSON.parse(fs.readFileSync("./apps.json", "utf8")).apps;

const apps = [
  {
    id: "id1091189122",
    title: "Bear",
  },
];

const api = "";
const options = { from: "en", to: "ru" };

const getUrl = (id) => {
  return "https://apps.apple.com/us/app/" + id;
};

const parse = (url, t) => {
  let results;
  const q = tress(function (url, callback) {
    needle.get(url, async function (err, res) {
      if (err) throw err;
      let $ = cheerio.load(res.body);

      let temp = JSON.parse($("script").html());
      results = {
        name: temp.name,
        subtitle: $(".product-header__subtitle").html().trim(),
        description: temp.description,
        screenshot: temp.screenshot,
        image: temp.image,
        category: temp.applicationCategory,
        author: temp.author.name,
        operatingSystem: temp.operatingSystem,
        version: $(".whats-new__latest__version").text(),
        size: $("dd").contents().eq(1).text().trim(),
      };
      await translate(results.description, options).then(
        (r) => (results.description = r.text)
      );
      await fetch(api, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(results),
      }).then((r) =>
        //ДОБАВИТЬ ID В АПП ЛИСТ ДЛЯ ЗАГРУЗКИ
        console.log(r)
      );
      callback();
    });
  }, 10);

  q.drain = function () {
    fs.writeFileSync(`./${t}.json`, JSON.stringify(results, null, 4));
  };
  q.push(url);
};

apps.map((e) => parse(getUrl(e.id), e.title));

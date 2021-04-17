const tress = require("tress");
const needle = require("needle");
const cheerio = require("cheerio");
const fs = require("fs");
const fetch = require("node-fetch");
const translate = require("@iamtraction/google-translate");
const request = require("request");
const FormData = require("form-data");

const apps = JSON.parse(fs.readFileSync("./apps.json", "utf8")).apps;

const api = "http://macmeharder.com:8080/private/application";
const options = { from: "en", to: "ru" };
const cookie =
  "session=MTYxODY2NDIwOHxEdi1CQkFFQ180SUFBUkFCRUFBQUh2LUNBQUVHYzNSeWFXNW5EQWtBQjNWelpYSmZhV1FEYVc1MEJBSUFBZz09fNB25-rYA_9CiH_F4AeWIZBX2V7aa6eVz-hrvXazWKkL";
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
        category: temp.applicationCategory,
        author: temp.author.name,
        operatingSystem: temp.operatingSystem,
        version: $(".whats-new__latest__version").text(),
        size: $("dd").contents().eq(1).text().trim(),
        source: "asd",
      };

      await translate(results.description, options).then(
        (r) => (results.description = r.text)
      );

      await fetch(api, {
        method: "POST",
        headers: {
          cookie,
        },
        body: JSON.stringify(results),
      })
        .then((r) => r.json())
        .then((data) => {
          const screenshots = new FormData();
          const image = new FormData();
          request.head(temp.image, () => {
            request(temp.image).pipe(
              fs.createWriteStream("./icon/" + t + "icon.jpg")
            );
          });
          image.append(
            "icon",
            fs.createReadStream("./icon/" + t + "icon.jpg"),
            t + "icon.jpg"
          );
          temp.screenshot.map((e, i) => {
            request.head(e, () => {
              request(e).pipe(
                fs.createWriteStream("./screenshots/" + t + i + ".jpg")
              );
            });
            screenshots.append(
              "screenshots",
              fs.createReadStream(`./screenshots/${t + i}.jpg`),
              t + i + ".jpg"
            );
          });
          setTimeout(() => {
            fetch(
              `http://macmeharder.com:8080/private/screenshots/application/${data.id}`,
              {
                method: "POST",
                headers: {
                  cookie,
                },
                body: screenshots,
              }
            ).catch((err) => console.log(err));
          }, 1000);

          setTimeout(() => {
            fetch(
              `http://macmeharder.com:8080/private/icon/application/${data.id}`,
              {
                method: "POST",
                headers: {
                  cookie,
                },
                body: image,
              }
            ).catch((err) => console.log(err));
          }, 5000);
        });

      callback();
    });
  }, -1000);
  q.push(url);
};

apps.map((e) => parse(getUrl(e.id), e.title));

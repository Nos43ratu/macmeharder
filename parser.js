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

const parse = (index) => {
  const next = index + 1;
  let results;
  const q = tress(function (url, callback) {
    needle.get(url, async function (err, res) {
      if (err) throw err;
      let $ = cheerio.load(res.body);

      let temp = JSON.parse($("script").html());
      results = {
        name: temp.name,
        subtitle: $(".product-header__subtitle").html()?.trim(),
        description: temp.description,
        category: temp.applicationCategory,
        author: temp.author.name,
        operatingSystem: temp.operatingSystem,
        version: $(".whats-new__latest__version").text(),
        size: $("dd").contents().eq(1).text().trim(),
        source: apps[index].source,
      };

      // await translate(results.description, options).then(
      //   (r) => (results.description = r.text)
      // );

      await fetch(api, {
        method: "POST",
        headers: {
          cookie,
        },
        body: JSON.stringify(results),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data.id);
          const screenshots = new FormData();
          const image = new FormData();
          request.head(temp.image, () => {
            request(temp.image).pipe(
              fs.createWriteStream("./icon/" + apps[index].title + "icon.jpg")
            );
          });
          image.append(
            "icon",
            fs.createReadStream("./icon/" + apps[index].title + "icon.jpg"),
            apps[index].title + "icon.jpg"
          );
          temp.screenshot.map((e, i) => {
            request.head(e, () => {
              request(e).pipe(
                fs.createWriteStream(
                  "./screenshots/" + apps[index].title + i + ".jpg"
                )
              );
            });
            screenshots.append(
              "screenshots",
              fs.createReadStream(`./screenshots/${apps[index].title + i}.jpg`),
              apps[index].title + i + ".jpg"
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
          }, 5000);

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
          }, 10000);
        });

      callback();
    });
  }, -1000);
  q.push(apps[index].url, () => {
    if (next <= apps.length - 1) {
      parse(next);
    }
  });
};

parse(0);

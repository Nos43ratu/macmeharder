const fs = require("fs");
const { exec } = require("child_process");
const chalk = require("chalk");

const apps = JSON.parse(fs.readFileSync("./apps.json", "utf8")).apps;

function random_rgba() {
  const o = Math.round,
    r = Math.random,
    s = 255;
  return {
    r: o(r() * s),
    g: o(r() * s),
    b: o(r() * s),
  };
}

const CreateJSON = () => {
  apps.map((e, i) => {
    fs.writeFileSync(
      `./jsons/${e.title}.json`,
      JSON.stringify(
        {
          title: e.title,
          background: "/Users/pobylan/Desktop/build-dmg/macme.png",
          format: "UDZO",
          "compression-level": 9,
          icon: "/Users/pobylan/Desktop/build-dmg/VolumeIcon.icns",
          "icon-size": 84,
          window: {
            position: {
              x: 100,
              y: 400,
            },
            size: {
              width: 800,
              height: 400,
            },
          },
          contents: [
            {
              x: 300,
              y: 267,
              type: "file",
              path: `/Users/pobylan/Desktop/applications/${e.title}.app`,
            },
            {
              x: 500,
              y: 267,
              type: "link",
              path: "/Applications",
            },
          ],
        },
        null
      )
    );
  });
  CreateDMG(0);
};

const CreateDMG = (index) => {
  const c = random_rgba();
  console.log(
    chalk.rgb(c.r, c.g, c.b).bold(`Start building ${apps[index].title}`)
  );
  exec(
    `dmgbuild -s "./jsons/${apps[index].title}.json" "${apps[index].title}" "/Users/pobylan/Desktop/${apps[index].title}.dmg"`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.bgWhite.red.bold(`error: ${error.message}`));
        console.log(chalk.bgWhite.red.bold(`Stopped index: ${index}`));
        return;
      }
      if (stderr) {
        console.log(chalk.bgWhite.red.bold(`stderr: ${stderr}`));
        console.log(chalk.bgWhite.red.bold(`Stopped index: ${index}`));
        return;
      }
      console.log(
        chalk.rgb(c.r, c.g, c.b).bold(`Finished build ${apps[index].title}`)
      );
      if (index < apps.length - 1) {
        CreateDMG(index + 1);
      } else {
        console.log(chalk.bgWhite.green.bold(`Finish: ${index}`));
      }
    }
  );
};

CreateJSON();

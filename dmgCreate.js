const fs = require("fs");
const { exec } = require("child_process");

const apps = JSON.parse(fs.readFileSync("./apps.json", "utf8")).apps;

const createDmgConfig = () => {
  apps.map((e) => {
    fs.writeFileSync(
      `./auto_settings.json`,
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
              path: `/Users/pobylan/Desktop/applications/${e.title}`,
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
    exec(
      `dmgbuild -s auto_settings.json "${e.title}" "/Users/pobylan/Desktop/${e.title}.dmg"`,
      (error, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
      }
    );
  });
};
createDmgConfig();

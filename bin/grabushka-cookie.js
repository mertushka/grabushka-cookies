const fs = require("fs");

if (!process.argv[2] || !process.argv[3])
  throw new Error(" 'Invalid args: <cookiesfile> <output>'");

(async () => {
  var cookies = "";
  fs.readFileSync(process.argv[2], "utf-8")
    .split(/\r?\n/)
    .forEach((line) => {
      if (line.includes("#")) return;
      if (line == "" || line == undefined) return;
      var host = line.split("|")[0]?.replace("Host: ", "").trim();
      var name = line.split("|")[1]?.replace(" Name: ", "").trim();
      var value = line.split("|")[2]?.replace(" Value: ", "").trim();
      cookies +=
        host +
        "	" +
        "TRUE" +
        "	/" +
        "	FALSE" +
        "	2597573456	" +
        name +
        "	" +
        value +
        "\n";
    });
  fs.writeFile(process.argv[3], cookies, (err) => {
    if (err) console.log(err);
    console.log("Done.");
  });
})();

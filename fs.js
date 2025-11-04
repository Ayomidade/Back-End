import fs from "fs";

fs.open("./_App.js", "wx", (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      return console.log("File already exist");
    }
    throw err;
  } else {
    try {
      fs.writeFile(
        "file.txt",
        "some random text",
        { encoding: "utf-8" },
        (err) => {
          if (err) throw err;
        }
      );
    } finally {
      fs.close(fd, (err) => {
        if (err) throw err;
        console.log("File closed successfully");
      });
    }
  }
});

// function readMyFile(filename) {
//   fs.readFile(filename, { encoding: "utf-8" }, (err, chunk) => {
//     if (err) throw err;
//     writMyFile("_App.js", chunk);
//   });
// }

// function writMyFile(file, content) {
//   fs.writeFile(file, content, { encoding: "utf-8" }, (err) => {
//     if (err) throw err;
//     console.log(`file ${file} is written to`);

//     fs.readdir(".", (err, files) => {
//       if (!err) return console.log(files);
//       throw err;
//     });
//   });
// }

// readMyFile("App.js");

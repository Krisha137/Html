var express = require("express");
var app = express();

var mult = require("multer");
app.use(express.static(__dirname, { index: "mult2.html" }));
var store = mult.diskStorage({
  destination: "myImage",
  filename: (req, file, cb) => {
    cb(null, file.filename + "=" + Date.now() + ".jpg");
  },
});
var upload = mult({ Storage: store, limits: { fileSize: 10 * 1024 * 1024 } });
app.post("/upload", upload.array("test", 5), (req, res) => {
  const files = req.files;
  if (files) {
    res.type("text/html");
    for (f of files) {
      res.write(`<h2>file ${f.originalname} has been uploaded </h2>`);
    }
  }
  res.send();
});
app.listen(5000);

// Output-------------

// file 3.png has been uploaded
// file 2.png has been uploaded
// file 1.png has been uploaded

// If you try to add more then 5 (because you set limit in code) then it will give you error :MulterError

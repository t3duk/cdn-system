const express = require("express");
const fs = require("fs");
const app = express();
const port = 1255;

const index = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>CDN - DAAD</title>
</head>
<body class="bg-neutral-900 items-center justify-center flex h-screen">
  <h1 class="select-none text-white font-arial text-2xl">DAAD Content Delivery Network</h1>
</body>
</html>`;

app.get("/", (req, res) => {
  res.send(index);
});

app.get("/:file", (req, res) => {
  const file = req.params.file;

  if (fs.existsSync(__dirname + "/" + file)) {
    res.sendFile(__dirname + "/" + file);
  } else {
    res.send(index);
  }
});

app.get("/:folder/:file", (req, res) => {
  const folder = req.params.folder;
  const file = req.params.file;

  if (fs.existsSync(__dirname + "/" + folder + "/" + file)) {
    res.sendFile(__dirname + "/" + folder + "/" + file);
  } else {
    res.send(index);
  }
});

app.get("/:folder1/:folder2/:file", (req, res) => {
  const folder1 = req.params.folder1;
  const folder2 = req.params.folder2;
  const file = req.params.file;

  if (fs.existsSync(__dirname + "/" + folder1 + "/" + folder2 + "/" + file)) {
    res.sendFile(__dirname + "/" + folder1 + "/" + folder2 + "/" + file);
  } else {
    res.send(index);
  }
});

app.listen(port, () => {
  console.log(`1 CDN listening at http://localhost:${port}`);
});

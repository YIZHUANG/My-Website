import register from "ignore-styles";
register([".scss", "css"]);
import express from "express";
import path from "path";
import { createClient } from "contentful";

import config from "./config";

import renderReact from "./renderReact";

const { space, accessToken, entryId } = config;
const client = createClient({
  space,
  accessToken
});

const app = express();

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
  const context = {};
  client
    .getEntry(entryId)
    .then(response => res.send(renderReact(req, context, response)))
    .catch(() => res.send(renderReact(req, context)));
    // send the default page no matter what.
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running at port " + PORT);
});

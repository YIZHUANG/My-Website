import React from "react";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";

import App from "./client/App";

export default function renderReact(req, context, contentfulData = null) {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
      <meta name="google-site-verification" content="20LmkmkH6EVVcEUh8Bbx6e_pmoDWUHdPKbGDbQmbYS8" />
        ${helmet.title.toString()} ${helmet.meta.toString()}
        <link rel="shortcut icon" href="cat.png">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
      <div id="root">
        ${content}
      </div>
      <script>
      window.__PRELOADED_STATE__ = ${
        contentfulData
          ? serialize(contentfulData.fields, {
              isJSON: true
            })
          : null
      }
      </script>
      <script src="bundle.js">
      </script>
    </body>
  </html>
  `;
  return html;
}

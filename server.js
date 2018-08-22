import register from 'ignore-styles';
import React from 'react';
import express from 'express';
import path from 'path';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';

import App from './client/App';

register(['.scss']);

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="utf-8">
    	<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
    	<title></title>
    </head>
    <body>
    	${helmet.title.toString()} ${helmet.meta.toString()}
    	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
    	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    	<div id="root">
    		${content}
    	</div>
    	<script src="bundle.js">
    	</script>
    </body>
    </html>
  `);
});

app.get('/googlecc6d846cfac7283d.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'googlecc6d846cfac7283d.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('server is running at port ' + PORT);
});

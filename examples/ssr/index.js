const { createElement, Fragment } = require("react");
const { renderToString } = require("react-dom/server");
const { Ellipsis, Ring, Ripple } = require("js-package-workflow-example");
const express = require("express");

const PORT = 3000;
const app = express();

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ellipsis),
    createElement(Ring),
    createElement(Ripple)
  )
);

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SSR Example</title>
    </head>
    <body>
      ${html}
    </body>
  </html>
  `);
});

app.listen(PORT, () => console.log(`hello`));

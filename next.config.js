require("dotenv").config();
const path = require("path");
const glob = require("glob");
const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript(
  withSass({
    sassLoaderOptions: {
      includePaths: ["styles", "node_modules"]
        .map(d => path.join(__dirname, d))
        .map(g => glob.sync(g))
        .reduce((a, c) => a.concat(c), [])
    }
  })
);

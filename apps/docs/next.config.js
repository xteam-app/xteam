const withTM = require("next-transpile-modules")(["@xteam-app/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});

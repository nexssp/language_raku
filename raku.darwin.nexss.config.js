let languageConfig = Object.assign({}, require("./raku.win32.nexss.config"));
languageConfig.compilers = {
  raku: {
    install: "brew install rakudo-star",
    command: "raku",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;

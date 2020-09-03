let languageConfig = Object.assign({}, require("./raku.win32.nexss.config"));
languageConfig.compilers = {
  raku: {
    install: "apt install -y rakudo",
    command: "raku",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;

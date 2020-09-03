let languageConfig = Object.assign({}, require("./raku.win32.nexss.config"));
const installRakudoStar = `${__dirname}/install/installRakudoStar.sh`;
languageConfig.compilers = {
  raku: {
    install: `bash ${installRakudoStar}`,
    command: "raku",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;

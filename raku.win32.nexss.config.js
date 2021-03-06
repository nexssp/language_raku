let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Raku";
languageConfig.description =
  "The newest member of the family of languages known as Perl.";
languageConfig.url = "https://www.raku.org/";
languageConfig.founders = ["Larry Wall"];
languageConfig.developers = [""];
languageConfig.years = ["2015"];
languageConfig.extensions = [".raku"];
languageConfig.builders = {}; // Check cpp or python to fill in example
languageConfig.compilers = {
  raku: {
    install: "scoop install rakudo-star",
    command: "raku",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.raku.errors");
languageConfig.languagePackageManagers = {
  zef: {
    installation: "installed.", // We install zef with the main installer
    messageAfterInstallation: "",
    installed: "zef list --installed",
    installed: "zef list",
    search: "zef search",
    info: "zef info",
    install: "zef install",
    uninstall: "zef remove",
    help: "zef",
    version: "zef version",
    init: () => {},
  },
};

module.exports = languageConfig;

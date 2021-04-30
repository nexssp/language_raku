let languageConfig = Object.assign({}, require("./raku.win32.nexss.config"));
// const installRakudoStar = `${__dirname}/install/installRakudoStar.sh`;

const sudo = process.sudo;
// https://rakudo.org/dl/rakudo/rakudo-moar-2021.04-01-linux-x86_64-gcc.tar.gz
const rakudoVersion = "2021.04-01";
const foldername = `rakudo-moar-${rakudoVersion}-linux-x86_64-gcc`;
const filename = `${foldername}.tar.gz`;

languageConfig.compilers = {
  raku: {
    install: process.replacePMByDistro(`${sudo}apt install -y wget tar gzip
if [ ! -f ${process.env.NEXSS_APPS_PATH}/${filename} ];then wget https://rakudo.org/dl/rakudo/${filename} -P ${process.env.NEXSS_APPS_PATH}/; fi
if [ ! -d "${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}" ]; then mkdir ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion} ; fi
tar -xf ${process.env.NEXSS_APPS_PATH}/${filename} --strip-components 1 -C ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}
cd ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}/bin/raku /usr/bin/raku
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}/bin/raku /usr/bin/raku${rakudoVersion}
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}/bin/perl6 /usr/bin/perl6
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}/bin/perl6 /usr/bin/perl6${rakudoVersion}
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}/bin/rakudo /usr/bin/rakudo
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/raku${rakudoVersion}/bin/rakudo /usr/bin/rakudo${rakudoVersion}
echo "installing package manager 'zef'.."
${sudo}apt install -y git
if [ -d "${process.env.NEXSS_APPS_PATH}/zef" ]; then rm -rf ${process.env.NEXSS_APPS_PATH}/zef; fi
cd ${process.env.NEXSS_APPS_PATH}
git clone https://github.com/ugexe/zef.git --depth=1 zef
cd zef
echo 'Installing package manager: zef.'
${sudo}raku${rakudoVersion} -I. bin/zef install .
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/zef/bin/zef /usr/bin/zef
zef install JSON::Tiny`),
    command: `raku${rakudoVersion}`,
    args: "<file>",
    help: `Raku has been installed. Now you can access raku from 'raku' or 'raku${rakudoVersion}' commands.`, // to implement
  },
};

const distName = process.distro;
languageConfig.dist = distName;

module.exports = languageConfig;

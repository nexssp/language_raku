mkdir ~/rakudo && cd $_

is_user_root () { [ ${EUID:-$(id -u)} -eq 0 ]; }
if is_user_root; then apt install -y curl; else sudo apt install -y curl; fi

curl -LJO https://rakudo.org/latest/star/src
tar -xzf rakudo-star-*.tar.gz
mv rakudo-star-*/* .
rm -fr rakudo-star-*

perl Configure.pl --backend=moar --gen-moar
make

# If you wish, you can run the tests
# Depending on your machine, they could take over half an hour to run
# make rakudo-test
# make rakudo-spectest

make install

echo "export PATH=\"\$HOME/rakudo/install/bin/:\$HOME/rakudo/install/share/perl6/site/bin:\$PATH"\" >> ~/.bashrc
source ~/.bashrc
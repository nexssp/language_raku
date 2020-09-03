mkdir ~/rakudo && cd $_
curl -LJO https://rakudo.org/latest/star/src
tar -xzf rakudo-star-*.tar.gz
mv rakudo-star-*/* .
rm -fr rakudo-star-*

perl Configure.pl --backend=moar --gen-moar
make

# If you wish, you can run the tests
# Depending on your machine, they could take over half an hour to run
make rakudo-test
make rakudo-spectest

make install

echo "export PATH=$(pwd)/install/bin/:$(pwd)/install/share/perl6/site/bin:\$PATH" >> ~/.bashrc
source ~/.bashrc
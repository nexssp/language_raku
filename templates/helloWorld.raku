#!/usr/bin/env raku

use strict;
use JSON::Tiny;

my $nexssStdin = $*IN.slurp;
my $parsedJson = from-json($nexssStdin);

$parsedJson.{"rakuOutput"}="helloFromRaku " ~ $*RAKU.version ~ " " ~ $*RAKU.compiler.version;

my $nexssStdout = to-json($parsedJson);
say "$nexssStdout";
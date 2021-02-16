#!/usr/bin/env raku

use JSON::Tiny;

my $parsedJson = from-json(slurp);

$parsedJson<rakuOutput> = "helloFromRaku $*RAKU.version() $*RAKU.compiler.version()";

my $nexssStdout = to-json($parsedJson);
say "$nexssStdout";

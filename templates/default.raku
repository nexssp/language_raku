#!/usr/bin/env raku

use JSON::Tiny;

my $parsedJson = from-json(slurp);

$parsedJson<test> = "test";

my $nexssStdout = to-json($parsedJson);
say "$nexssStdout";

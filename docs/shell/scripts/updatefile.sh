#!/usr/bin/env bash
echo 'index'
oldStr='index'
newStr='newstr'
sed -i "" "s|${oldStr}|${newStr}|" ./docs/shell/scripts/test.js
cat ./docs/shell/scripts/test.js
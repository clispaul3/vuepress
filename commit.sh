!/usr/bin/env sh
set -e
git add .
git commit -m 'commit by zyb'
git pull
git push -u vuepress master

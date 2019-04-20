#!/bin/env sh
if [ $1 ]
then
  comment=$1
else
  comment='commit by bash'
fi
set -e
git add .
git commit -m ${comment}
git push

#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../helpers/shell-helpers.sh"

run "aws configure set preview.cloudfront true"

run "aws s3 sync artifacts/build/ s3://fe-good-morning-production/"
run "aws s3 cp artifacts/build/index.html s3://fe-good-morning-production/index.html --cache-control max-age=300"

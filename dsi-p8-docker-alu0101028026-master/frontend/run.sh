#!/bin/bash

docker build -t front-app .
docker run --rm -t -p 80:80 front-app

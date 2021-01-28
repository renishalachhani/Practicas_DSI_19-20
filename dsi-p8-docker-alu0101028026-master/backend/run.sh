#!/bin/bash 

docker build -t app-node .

docker run --rm -t -p 8081:8081 app-node

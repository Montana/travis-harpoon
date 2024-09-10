#!/bin/bash

echo "$HARPOON_API_TOKEN" | docker login https://registry.harpooncorp.com -u montana --password-stdin

docker build --platform linux/amd64 -t harpoondemo .

docker tag harpoondemo:latest registry.harpooncorp.com/montana/harpoondemo:latest

docker push registry.harpooncorp.com/montana/harpoondemo:latest

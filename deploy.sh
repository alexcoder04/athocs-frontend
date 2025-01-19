#!/bin/sh

DEPLOY_HOST="192.168.0.86"
DEPLOY_BASE_DIR="/home/alex/athocs"

npm run build && rsync -rvu "build/" "$DEPLOY_HOST:$DEPLOY_BASE_DIR/frontend"


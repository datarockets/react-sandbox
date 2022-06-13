#!/bin/bash
set -e

requested_env="$1"

env=""

token=""

if [ ! -z "$requested_env" ]
then
  env="$requested_env"
elif [ ! -z "$VERCEL_ENV" ]
then
  if [ "$VERCEL_ENV" = "production" ]
  then
    env="production"
  elif [ "$VERCEL_ENV" = "preview" ]
  then
    env="preview"
  else env="development"
  fi
else
  env="development"
fi

if [ -z "$TAWBAR_API_KEY" ]
then
  echo "Provide your security token:"
  read -s token
else
  token="$TAWBAR_API_KEY"
fi

curl -H "Authorization: $token" "https://staging.api.tawbar.com/projects/v1/7FAUfIuRJM6TXxVS37b0/$env" -o .env


echo "[bin/pullenv] Saved '$env' set of variables to .env"

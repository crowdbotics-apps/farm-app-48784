#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT farm_app_48784.wsgi:application

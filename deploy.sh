#!/bin/bash

rsync -avz --delete --progress --exclude node_modules/ dist/ root@31.192.231.90:../../var/www/labs.urre.me/spotifind

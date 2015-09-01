#!/bin/bash

cd /var/www
cp app/config/config.yml.dist app/config/config.yml

composer install --prefer-dist

if [ ! -d "app/cache" ]; then
    mkdir app/cache
fi

sudo chmod -R 755 web/files/ app/database/ app/cache/ app/config/ web/theme/ web/extensions/

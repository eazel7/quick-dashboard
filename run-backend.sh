#! /bin/bash

if [ ! -d backend/node_modules ]; then
    (cd backend && npm install);
fi

(cd backend && node .)

#! /bin/bash

if [ ! -d frontend/node_modules ]; then
    (cd frontend && npm install);
fi

(cd frontend && npm run start)

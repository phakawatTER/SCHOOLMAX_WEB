#!/bin/bash

rm -rf build
npm run build
tar -zcvf build.tgz build


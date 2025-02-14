export autoDir=$PWD
export rootDir=$autoDir/../SubitoTest

#!/bin/sh
echo "---"
echo "---"
echo "----------------- build SubitoTest -----------------"
echo "---"
echo "---"
cd $rootDir
npm install
npm run build





export autoDir=$PWD
export rootDir=$autoDir/../SubitoTest

#!/bin/sh
echo "---"
echo "---"
echo "----------------- Docker build $rootDir -----------------"
echo "---"
echo "---"
cd $rootDir
docker build -t proposal_fe -f $rootDir/Dockerfile $rootDir --label group=subito



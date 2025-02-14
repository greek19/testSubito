#!/bin/bash

echo "Rimuovo tutti i container e tutte le immagini del progetto ..."
./_remove-images.sh 

echo "Build di tutto ..."
./_build-projects.sh 

echo "Creo tutte le immagini ..."
./_build-docker-images.sh 

echo "Creo tutti container ..."
docker compose up -d



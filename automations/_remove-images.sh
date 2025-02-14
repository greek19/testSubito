	
	declare -a images=("proposal_fe")
	
	for image in "${images[@]}"; do
				
		# Controlla se il container esiste
		CONTAINER_ID=$(docker ps -aq -f name="^$image")

		if [ -n "$CONTAINER_ID" ]; then
		  echo "Il container $image esiste. Lo fermo e lo rimuovo..."
		  docker stop "$image" && docker rm "$image"
		else
		  echo "Il container $image non esiste."
		fi

		# Trova l'immagine associata al container
		IMAGE_ID=$(docker images -q "pco/$image")

		if [ -n "$IMAGE_ID" ]; then
		  echo "L'immagine $IMAGE_ID esiste. La rimuovo..."
		  docker rmi "$IMAGE_ID"
		else
		  echo "L'immagine $IMAGE_ID non esiste."
		fi

		echo "Operazione completata."
	done
# Makefile

.PHONY: help
help: ## Muestra la ayuda de los objetivos disponibles
	@echo "Uso: make [objetivo]"
	@echo ""
	@echo "Objetivos disponibles:"
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		print " - " substr($$1, 0, length($$1)-1) \
	} /^## / { \
		print "    " substr($$0, 5) \
	} ' $(MAKEFILE_LIST)

.PHONY: enter-php-container
back:
	docker exec -it backend /bin/bash

#backend:													## Enter php-fpm container
#	@docker-compose exec www /bin/bash

frontend:
	@docker-compose exec frontend sh
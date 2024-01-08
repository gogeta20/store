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

user:
	docker exec -u 1000 -it backend /bin/bash
#backend:													## Enter php-fpm container
#	@docker-compose exec www /bin/bash

frontend:
	@docker-compose exec frontend sh

up:
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

restart:
	docker compose restart

restart-docker:
	sudo service docker restart

cache:
	docker exec backend sh -c "php bin/console cache:clear"

router:
	docker exec backend sh -c "php bin/console debug:router"

build:
	docker compose build

log-front:
	docker logs frontend

log-back:
	docker logs backend

restart-apache:
	docker exec backend sh -c "service apache2 restart"

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

up:
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

restart:
	docker compose restart

build:
	docker compose build

restart-docker:
	sudo service docker restart

#========================================
.PHONY: enter-php-container
back:
	docker exec -it backend /bin/bash

user:
	docker exec -u 1000 -it backend /bin/bash

cache:
	docker exec backend sh -c "php bin/console cache:clear"

router:
	docker exec backend sh -c "php bin/console debug:router"

log-back:
	docker logs backend

restart-apache:
	docker exec backend sh -c "service apache2 restart"

#========================================
phpmyadmin:
	docker exec -it phpmyadmin /bin/bash

log-phpmyadmin:
	docker logs phpmyadmin

#========================================
frontend:
	@docker-compose exec frontend sh

log-front:
	docker logs frontend

#========================================
db:
	docker exec -it db /bin/bash

f ?= default
.PHONY: db-update

db-update: ## Ejecuta la suite. make db-update f=secondupdate
	docker exec db sh -c 'mysql -u root -ptest -e "SOURCE /var/www/html/sql/$(f).sql"'

#========================================

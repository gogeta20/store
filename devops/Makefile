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

phpmyadmin:
	docker exec -it phpmyadmin /bin/bash

user:
	docker exec -u 1000 -it backend /bin/bash
#backend:													## Enter php-fpm container
#	@docker-compose exec www /bin/bash

frontend:
	@docker-compose exec frontend sh

db:
	docker exec -it db /bin/bash

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

log-phpmyadmin:
	docker logs phpmyadmin

log-back:
	docker logs backend

restart-apache:
	docker exec backend sh -c "service apache2 restart"

f ?= default
.PHONY: db-update

db-update: ## Ejecuta la suite. make db-update f=secondupdate
	docker exec db sh -c 'mysql -u root -ptest -e "SOURCE /var/www/html/sql/$(f).sql"'


#db-update:
#	docker exec db sh -c 'mysql -u root -ptest -e "SOURCE /var/www/html/sql/mySql.sql"'
#
#file: CMD=$(f)
#.PHONY: db-update
#db-update: ## Ejecuta la suite. make db-update f=secondupdate
#	docker exec db sh -c 'mysql -u root -ptest -e "SOURCE /var/www/html/sql/$(s).sql"'


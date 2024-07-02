FROM gitlab/gitlab-runner:latest

# Opcional: Puedes agregar configuraciones personalizadas aquí
# Por ejemplo, instalando dependencias adicionales
# RUN apt-get update && apt-get install -y some-dependency

ENTRYPOINT ["/usr/bin/dumb-init", "/entrypoint"]
CMD ["run", "--user=gitlab-runner", "--working-directory=/home/gitlab-runner"]

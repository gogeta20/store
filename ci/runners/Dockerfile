FROM gitlab/gitlab-runner:v17.1.0

USER root

# Instalación de herramientas y certificados
RUN apt-get update && \
    apt-get install -y vim iputils-ping dnsutils curl && \
    rm -rf /var/lib/apt/lists/*

COPY ./cert/gitlab.crt /usr/local/share/ca-certificates/gitlab.crt
RUN update-ca-certificates

# Configuración del editor por defecto
ENV EDITOR=/usr/bin/vim

# Entrypoint y CMD
ENTRYPOINT ["/usr/bin/dumb-init", "/entrypoint"]
CMD ["run", "--user=gitlab-runner", "--working-directory=/home/gitlab-runner"]

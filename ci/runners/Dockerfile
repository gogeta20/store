FROM gitlab/gitlab-runner:latest

# Copiar el certificado al contenedor
COPY ./cert/gitlab.crt /usr/local/share/ca-certificates/gitlab.crt

# Actualizar el almacén de certificados
RUN update-ca-certificates

# Instalar herramientas de red
RUN apt-get update && apt-get install -y dnsutils curl

ENTRYPOINT ["/usr/bin/dumb-init", "/entrypoint"]
CMD ["run", "--user=gitlab-runner", "--working-directory=/home/gitlab-runner"]
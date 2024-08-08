external_url "https://gitlab.mvm"
nginx['enable'] = true
nginx['redirect_http_to_https'] = true
nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.mvm.pem"
nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.mvm-key.pem"
# nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.mvm.crt"
# nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.mvm.key"
gitlab_workhorse['listen_network'] = "unix"
gitlab_workhorse['listen_addr'] = "/var/opt/gitlab/gitlab-workhorse/socket"

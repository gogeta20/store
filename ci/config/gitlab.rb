external_url "https://gitlab.mvm"
nginx['redirect_http_to_https'] = true
nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.mvm.crt"
nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.mvm.key"

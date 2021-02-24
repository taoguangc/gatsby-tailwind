---
title: Working with a Local Git Repository
date: 2019-06-20
---

added in netlify-cms@2.10.17 / netlify-cms-app@2.11.14

You can connect Netlify CMS to a local Git repository, instead of working with a live repo.

1. Navigate to a local Git repository configured with the CMS.
2. Add the top-level property local_backend configuration to your config.yml:

```
backend:
  name: git-gateway

# when using the default proxy server port
local_backend: true
```

3. Run npx netlify-cms-proxy-server from the root directory of the above repository.

If the default port (8081) is in use, the proxy server won't start and you will see an error message. In this case, follow these steps before proceeding. 4. Start your local development server (e.g. run gatsby develop). 5. Open http://localhost:8000/admin to verify that your can administer your content locally.
Note: netlify-cms-proxy-server runs an unauthenticated express server. As any client can send requests to the server, it should only be used for local development.

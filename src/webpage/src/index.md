---
layout: home

hero:
  name: "DynAPI"
  text: "an out-of-the-box <span style=\"color: #6196ff;\">Dyn</span>amic <span style=\"color: #6196ff\">API</span><br>for many Databases"
  tagline: currently under development
  image:
    src: /dynapi.svg
    alt: DynAPI
  actions:
#    - theme: brand
#      text: Guide
#      link: /guide/what-is-dynapi
#    - theme: alt
#      text: References
#      link: /references
    - theme: alt
      text: DynAPI (V1)
      link: https://github.com/DynAPI/DynAPI
    - theme: alt
      text: See on GitHub
      link: https://github.com/DynAPI/org.dynapi.dynapi

features:
  - title: Fast
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
    details: DynAPI is written in a performant language for the best speed. Additionally, DynAPI doesn't require any complex ORM and archives with this quick response times.
  - title: Secure
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    details: With an (optional) builtin User-Control-System you can limit the access to your data or make it publicly available.
  - title: Realtime updates
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-backup"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69"/><path d="M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88"/><path d="M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/></svg>
    details: The moment you make changes to the database it is reflected in the API. No need to restart the Server or wait ages for it to synchronise.
  - title: Full Control
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
    details: In case you don't want to reveal your whole database it is possible to configure which parts are available.
---

<script setup>
import { withBase } from "vitepress";
import { VPTeamMembers } from 'vitepress/theme';
import { data as databases } from "/data/databases.data.ts";
import { data as members } from "/data/members.data.ts";
</script>

<style scoped>
#dbms-links {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0;
}
#dbms-links > a {
    text-decoration: none;
    color: var(--vp-c-text-1);
}
#dbms-links > a:hover {
    text-decoration: underline;
}
#dbms-links > a > img {
    height: 100px;
    margin: 0 auto;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
}
#dbms-links > a:hover > img {
    filter: grayscale(0%);
}
</style>

---

> [!IMPORTANT]
> The DynAPI Team is currently working on the better and faster Version 2 of DynAPI.
> You may be searching for the [Version 1](https://github.com/DynAPI/DynAPI).
> 
> DynAPI (V1) is written in Python and supports only PostgreSQL Databases.

---

<h1 style="text-align: center">DynAPI supports (soon) multiple DBMS</h1>

<div id="dbms-links" style="">
    <a v-for="db in databases" :href="db.href">
        <img :alt="db.label" :src="withBase(db.src)" />
        <p style="text-align: center">{{ db.label }}</p>
    </a>
</div>

[//]: # (- Vertica)

<!--

---

<h1 style="text-align: center;">Performance</h1>

---

<h1 style="text-align: center;">Security</h1>

---

<h1 style="text-align: center;">Realtime Updates</h1>

---

<h1 style="text-align: center;">Full Control</h1>

-->

---

<h1 style="text-align: center;">The DynAPI Team</h1>

<VPTeamMembers size="small" :members="members" />

---

<h1 style="text-align: center;">Other DynAPI Software/Packages</h1>

### [The Interceptor](https://github.com/dynapi/interceptor)

> Middleman between the clients and your backend to add security or other verifications to the requests.

The Interceptor is a simple extendable HTTP Proxy-Server to add logging or authentication to an existing backend.
You can add `interceptors` which can reject incoming requests or modify them before sending them to the actual backend.

### [org.dynapi:squirtle](https://github.com/dynapi/org.dynapi.squirtle)

> Java SQL Query Builder

Squirtle is a dynamic SQL-Query-Builder that supports multiple DBMS-Dialects.
It can be used to generate simple or complex SQL queries.

### [org.dynapi:openapispec](https://github.com/dynapi/org.dynapi.openapispec)

> OpenAPI Specification Builder Library

OpenApiSpec can be used to generate [OpenApi-Specification](https://swagger.io/specification/).
This specification can then be used in combination with [Swagger-UI](https://swagger.io/tools/swagger-ui/) or [ReDoc](https://redocly.com/) to add a beautiful documentation to your Restful API.

### [org.dynapi:json-schema-gen](https://github.com/dynapi/org.dynapi.jsonschemagen)

> Simple json-schema Generation Library

Json-Schema-Gen is a library to generate a [JSON-Schema](https://json-schema.org/) for your configuration file in order for IDE to provide better autocompletion.
This library supports the generation by using annotation on your configuration-class or by directly using the Java-API.

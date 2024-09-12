<script setup>
import { data as databases } from "/data/databases.data.ts";
</script>

<style scoped>
#dbms-list a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
#dbms-list a:hover {
  text-decoration: underline;
}
#dbms-list a > img {
  display: inline-block;
  height: 1em;
  margin-right: 0.5em;
}
</style>

# What is DynAPI?

DynAPI is an out-of-the-box **Dyn**amic **API** for many databases. By offering REST and (planned) GraphQL \
It has
- an easy setup
- fast response times
- good automatic documentation (with [Redoc](https://redocly.com/redoc) and [Swagger](https://swagger.io/tools/swagger-ui/))


<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](../quickstart/index.md).
</div>

## Use Cases

- **Temporary Backend**

   DynAPI's easy-to-setup system can be used perfectly to get a backend for smaller or short-living projects.

- **Development**

    DynAPI can be used to provide a fully documented Rest-API for your Database.
    This way your frontend-devs can start working while the actual backend is still in the planning or (early) development stage.

- **Production**

    While DynAPI can be used as a temporary- or development- backend. It is fully capable to run in production and handle hundreds (if not thousands) of requests simultaneously.

- **Export Tool**

    DynAPI can also be used for scripts or other automated services to get (read-)access to the saved data.
    For such a job it would be too much work to create your own customized backend.

This erases your work of selecting a programming-language and libraries, writing and adjusting Endpoints, and creating a deployment process.
Additionally, it's likely that your backend wouldn't be fully documented or has a secure authentication system. 

In case you need some special (customized) Endpoints you can create a simple plugin that extends the DynAPI Server.

Planned for a later stage is also the support for GraphQL.

## What About DynAPI?

DynAPI is the successor of [DynAPI (v1)](https://github.com/DynAPI/DynAPI). 
The original DynAPI was written in Python with Flask and was made for PostgreSQL databases.
Rewritten in Java with Spring-Boot, the new DynAPI provides a significant boost in performance.

While DynAPI (v1) could only work with PostgreSQL databases, the new DynAPI supports more DBMS.
(see [supported database](#supported-databases))

## Supported Databases

<ul id="dbms-list">
    <li v-for="database in databases">
        <a :href="database.href">
            <img :src="database.src" :alt="database.label" />
            <span>{{ database.label }}</span>
        </a>
    </li>
</ul>

<small>*DynAPI is extendable to support other DBMS.</small>

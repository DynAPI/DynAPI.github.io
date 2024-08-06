---
layout: home

hero:
  name: "DynAPI"
  text: "Dynamic API for many Databases"
  tagline: V2 is currently under development
  actions:
#    - theme: brand
#      text: Quickstart
#      link: /quickstart
#    - theme: alt
#      text: Documentation
#      link: /docs
    - theme: alt
      text: DynAPI (v1)
      link: https://github.com/DynAPI/DynAPI

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

<hr />

> [!IMPORTANT]
> The DynAPI Team is currently working on the better and faster Version 2 of DynAPI.
> You may be searching for the [Version 1](https://github.com/DynAPI/DynAPI)

<hr />

<script setup>
import { withBase } from "vitepress";

const databases = [
    { label: "ClickHouse", src: "/dbms-icons/clickhouse.svg" },
    { label: "Microsoft SQL Server", src: "/dbms-icons/mssql.svg" },
    { label: "MySQL", src: "/dbms-icons/mysql.svg" },
    { label: "Oracle", src: "/dbms-icons/oracle.png" },
    { label: "PostgreSQL", src: "/dbms-icons/postgresql.svg" },
    { label: "Redshift", src: "/dbms-icons/redshift.svg" },
    { label: "Snowflake", src: "/dbms-icons/snowflake.svg" },
    { label: "SQLite", src: "/dbms-icons/sqlite.svg" },
]
</script>

<h1 style="text-align: center">DynAPI supports multiple DBMS</h1>

<div style="display: flex; justify-content: space-around; padding: 2rem 0">
    <div v-for="db in databases">
        <img style="height: 100px; margin: 0 auto" :alt="db.label" :src="withBase(db.src)" />
        <p style="text-align: center">{{ db.label }}</p>
    </div>
</div>

[//]: # (- Vertica)

export default {
    load(): Data[] {
        return <Data[]>[
            { label: "ClickHouse", src: "/dbms-icons/clickhouse.svg" },
            { label: "Microsoft SQL Server", src: "/dbms-icons/mssql.svg" },
            { label: "MySQL", src: "/dbms-icons/mysql.svg" },
            { label: "Oracle", src: "/dbms-icons/oracle.png" },
            { label: "PostgreSQL", src: "/dbms-icons/postgresql.svg" },
            { label: "Redshift", src: "/dbms-icons/redshift.svg" },
            { label: "Snowflake", src: "/dbms-icons/snowflake.svg" },
            { label: "SQLite", src: "/dbms-icons/sqlite.svg" },
        ]
    }
}

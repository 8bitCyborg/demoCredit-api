// Update with your config settings.
const config = {
    development: {
        client: "mysql2",
        connection: {
            host: "localhost",
            user: "root",
            password: "",
            database: "demo_credit"
        },
        migrations: {
            directory: "./src/database/migrations",
            extension: "ts"
        },
    }
};
export default config;
//# sourceMappingURL=knexfile.js.map
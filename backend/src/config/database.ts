require("../bootstrap");

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
  },
  dialect: "mysql",
  timezone: "-03:00",
  host: "localhost",
  database: "whaticket",
  username: "root",
  password: "root",
  port: 3306,
  logging: false
};

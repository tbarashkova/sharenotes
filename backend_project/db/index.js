const Sequelize = require("sequelize");

const sequelize = new Sequelize("reactjs", "root", "root1", {
    dialect: "mysql",
    host: "127.0.0.1",
    port: "33060"
});


const Notes = require('./Notes')(sequelize);

module.exports = {
    sequelize: sequelize,
    notes: Notes
}
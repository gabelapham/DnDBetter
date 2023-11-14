
const dbConfig = require("../db.config.cjs");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.models.cjs")(sequelize, Sequelize);
db.bardSpells = require("./bardSpell.model.cjs")(sequelize, Sequelize);
db.clericSpells = require("./clericSpell.model.cjs")(sequelize, Sequelize);
// db.druidSpells = require("./spell.model.cjs")(sequelize, Sequelize);

module.exports = db;
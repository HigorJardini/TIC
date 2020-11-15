const Sequelize = require('sequelize');

const User = require('../app/models/User');

const config = require('../config/database');

const models = [
                User
               ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models.map(model => {
            model.init(this.connection);
        });
    }
}

module.exports = new Database();
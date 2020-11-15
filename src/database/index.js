const Sequelize = require('sequelize');

const User = require('../app/models/User')

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

        models.forEach(function(model) {
          module.exports[model] = Sequelize.import(__dirname + '/' + model);
        });
    }
}

module.exports = new Database();
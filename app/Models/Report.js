'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Report extends Model {
    townHall () {
        return this.belongsTo('App/Models/TownHall')
    }
}

module.exports = Report

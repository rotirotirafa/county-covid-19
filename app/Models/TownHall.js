'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TownHall extends Model {
    city () {
        return this.belongsTo('App/Models/City')
    }
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = TownHall

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StateSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.string('initials', 2).notNullable().unique()
      table.string('name', 50).notNullable()
      table.string('slug', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('states')
  }
}

module.exports = StateSchema

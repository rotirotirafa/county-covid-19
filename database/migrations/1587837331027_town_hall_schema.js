'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TownHallSchema extends Schema {
  up () {
    this.create('town_halls', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('contact', 255)
      table.boolean('active').defaultTo(true)
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('town_halls')
  }
}

module.exports = TownHallSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.boolean('active').defaultTo(true)
      table.integer('suspect_cases')
      table.integer('confirmed_cases')
      table.integer('discarded _cases')
      table.integer('hospitalized_cases')
      table.integer('recovered_cases')
      table.integer('deaths_cases')
      table.integer('town_hall_id').unsigned().references('id').inTable('town_halls')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema

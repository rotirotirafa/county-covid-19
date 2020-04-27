'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.boolean('active').defaultTo(true)
      table.integer('suspect_cases').unsigned()
      table.integer('confirmed_cases').unsigned()
      table.integer('discarted_cases').unsigned()
      table.integer('hospitalized_cases').unsigned()
      table.integer('recovered_cases').unsigned()
      table.integer('deaths_cases').unsigned()
      table.integer('town_hall_id').unsigned().references('id').inTable('town_halls')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema

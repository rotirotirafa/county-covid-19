'use strict'

const Report = use('App/Models/Report')

const Database = use('Database')

class ReportController {
    async index () {
        return await Report.query().with('townHall').fetch();
    }

    async store ({ request }) {
        const data = request.all();
        const report = await Report.create(data)
        return report
    }    

    async show ({ params }) {
        const report = await Report.findOrFail(params.id)
        return report
    }

    async getTownReport ({ params }) {
        const report = await Report.findOrFail(params.id)
        await report.load('townHall');
        return report;
    }

    async update ({ params, request }) {
        const report = await Report.findOrFail(params.id)
        const data = request.all()
        report.merge(data)
        await report.save()
        return { message: "Success on update." };
    }

    async destroy ({ params }) {
        const report = await Report.findOrFail(params.id)
        await report.delete()
        return { message: "Success on delete." };
    }
}

module.exports = ReportController

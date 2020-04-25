'use strict'

const TownHalls = use('App/Models/TownHall')

class TownHallController {

    async index () {
        const townHalls = await TownHalls.query().with('city').with('user').fetch();
        return townHalls;
    }

    async store ({ request }) {
        const data = request.all()
        const townHall = await TownHalls.create(data)
        return townHall
    }

    async show ({ params }) {
        const townHalls = await TownHalls.findOrFail(params.id)
        return townHalls
    }

    async update ({ params, request }) {
        const townHall = await TownHalls.findOrFail(params.id)
        const data = request.all()
        townHall.merge(data)
        await townHall.save()
        return { message: "Success on update." };
    }

    async destroy ({ params }) {
        const townHall = await TownHalls.findOrFail(params.id)
        await townHall.delete()
        return { message: "Success on delete." };
    }
}

module.exports = TownHallController

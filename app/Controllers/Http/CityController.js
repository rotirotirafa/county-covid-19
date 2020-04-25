'use strict'

const City = use('App/Models/City')

class CityController {
    async index () {
        return await City.query().with('state').fetch();
    }

    async store ({ request }) {
        const data = request.all()
        const city = await City.create(data)
        return city
    }

    async show ({ params }) {
        const cities = await City.findOrFail(params.id)
        return cities
    }

    async update ({ params, request }) {
        const city = await City.findOrFail(params.id)
        const data = request.all()
        city.merge(data)
        await city.save()
        return { message: "Success on update." };
    }

    async destroy ({ params }) {
        const city = await City.findOrFail(params.id)
        await city.delete()
        return { message: "Success on delete." };
    }
}

module.exports = CityController

'use strict'

const State = use('App/Models/State')

class StateController {
    async index () {
        const states = await State.all();
        return states;
    }

    async store ({ request }) {
        const data = request.all()
        const state = await State.create(data)
        return state
    }

    async show ({ params }) {
        const users = await State.findOrFail(params.id)
        return users
    }

    async update ({ params, request }) {
        const state = await State.findOrFail(params.id)
        const data = request.all()
        state.merge(data)
        await state.save()
        return { message: "Success on update." };
    }

    async destroy ({ params }) {
        const state = await State.findOrFail(params.id)
        await state.delete()
        return { message: "Success on delete." };
    }
}

module.exports = StateController

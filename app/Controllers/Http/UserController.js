'use strict'

const Users = use('App/Models/User')

class UserController {
    
     async index () {
        const users = await Users.all();
        return users;
    }

    async store ({ request }) {
        const data = request.all()
        const user = await Users.create(data)
        return user
    }

    async show ({ params }) {
        const users = await Users.findOrFail(params.id)
        return users
    }

    async update ({ params, request }) {
        const users = await Users.findOrFail(params.id)
        const data = request.all()
        users.merge(data)
        await users.save()
        return { message: "Success on update." };
    }

    async destroy ({ params }) {
        const user = await Users.findOrFail(params.id)
        await user.delete()
        return { message: "Success on delete." };
    }
}

module.exports = UserController

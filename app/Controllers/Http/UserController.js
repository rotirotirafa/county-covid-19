'use strict'

const Users = use('App/Models/User')

class UserController {
     //GET : addresses/
     async index () {
        const users = await Users.all();
        return users;
    }

    //POST : addresses/
    async store ({ request }) {
        const data = request.all()
        const user = await Users.create(data)
        return user
    }

    //GET : addresses/:id
    async show ({ params }) {
        const users = await Users.findOrFail(params.id)
        return users
    }

    //PUT : addresses/:id
    async update ({ params, request }) {
        const users = await Users.findOrFail(params.id)
        const data = request.all()
        users.merge(data)
        await users.save()
        return { message: "Success on update." };
    }

    //DELETE : addresses/:id
    async destroy ({ params }) {
        const user = await Users.findOrFail(params.id)
        await user.delete()
        return { message: "Success on delete." };
    }
}

module.exports = UserController

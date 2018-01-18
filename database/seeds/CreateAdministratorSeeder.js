'use strict'

/*
|--------------------------------------------------------------------------
| CreateAdministratorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class CreateAdministratorSeeder {
  async run () {
    const role = await Factory.model('Adonis/Acl/Role').create()
    const user = await Factory.model('App/Models/User').create({
      username: 'admin',
      email: 'admin@test.com',
      password: 'secret',
    })
    await user.roles().attach([role.id])
  }
}

module.exports = CreateAdministratorSeeder

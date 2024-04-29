exports.seed = async function (knex) {
  await knex('screen').insert([
    {
      name: 'Login',
      route: '/login'
    },
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Grupos',
      route: '/group'
    },
    {
      name: 'Programas',
      route: '/acl'
    },
    {
      name: 'Usuarios',
      route: '/user'
    },
    {
      name: 'Me',
      route: '/me'
    },
    {
      name: 'Item',
      route: '/item'
    },
    {
      name: 'Screen',
      route: '/screen'
    },
    {
      name: 'UserGroup',
      route: '/userGroup'
    }
  ])
}

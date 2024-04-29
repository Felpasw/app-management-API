exports.seed = async function (knex) {
  await knex('user').insert([
    {
      name: 'Admin',
      email: 'admin@softwaresul.com.br',
      password: '$2b$10$lBLHD5v3u5P2EyJqbtS0jeibzvVrmVFOvetav9CxHSEb6IaOaqz26'
    },
    {
      name: 'User',
      email: 'user@softwaresul.com.br',
      password: '$2b$10$lBLHD5v3u5P2EyJqbtS0jeibzvVrmVFOvetav9CxHSEb6IaOaqz26'
    }
  ])
}

const knex = require('knex')





async function getVersion() {
    try {
        const result = await db.raw('SELECT version()')
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

//getVersion()

/*db.raw('SELECT * from products2')
.then(data => console.log(data.rows))
.catch(err => console.log(err))*/

//query builder
/* db('products2')
.select('id', 'name', 'price')
.whereIn('id', [2, 3])
.whereNot('price', '<', 300)
.orderBy('name')
.then(data => console.log(data))
.catch(err => console.log(err)) */

//insert
db('products2')
.where({id: 4})
.del()
/* .insert([
    { name: 'ccc', price: 234 },
    { name: 'eee', price: 543 }
]) */
//update
/* .update({ name: 'Product 111', price:111 })
.where({id: 1}) */
.returning(['id', 'name', 'price']) 
.then(data => console.log(data))
.catch(err => console.log(err))


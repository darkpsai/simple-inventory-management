const mongoose = require('mongoose')
const Item = require('../models/item')

mongoose.connect('mongodb://127.0.0.1:27017/inventory-db')
  .then(() => {
    console.log('Connection open')
  })
  .catch(err => {
    console.log("Error")
    console.log(err)
  })

const seeder = async () => {
  await Item.deleteMany({})

  const items = [
    {
      name: 'Nike',
      category: 'Shoes',
      quantity: '10',
      price: '1000',
      description: 'A beautiful shoes',
      stockStatus: 'In Stock'
    },
    {
      name: 'Hammerhead',
      category: 'Shirt',
      quantity: '100',
      price: '500',
      description: 'A cool shirt',
      stockStatus: 'In Stock'
    },
    {
      name: 'BNY',
      category: 'Shorts',
      quantity: '50',
      price: '250',
      description: 'A good shorts',
      stockStatus: 'In Stock'
    }
  ]

  await Item.insertMany(items);
}

seeder().then(() => {
  mongoose.connection.close();
})
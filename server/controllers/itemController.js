const mongoose = require('mongoose')
const Item = require('../../models/item')

mongoose.connect('mongodb://127.0.0.1:27017/inventory-db')
  .then(() => {
    console.log('Connection open')
  })
  .catch(err => {
    console.log("Error")
    console.log(err)
  })

// List of all users
exports.items = async (req, res) => {
  const items = await Item.find();
  res.render('index', { items: items })
}

exports.viewItem = async (req, res) => {
  const item = await Item.findById(req.params.id)
  res.render('viewItem', { item })
}

exports.addItemForm = async (req, res) => {
  res.render('addItemForm')
}

exports.addItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.itemName,
      category: req.body.itemCategory,
      quantity: req.body.itemQuantity,
      price: req.body.itemPrice,
      stockStatus: req.body.itemStatus,
      description: req.body.itemDescription
    });

    await newItem.save();
    res.redirect('/items');
  } catch (err) {
    res.status(500).send('Server error!');
  }
}

exports.editItemForm = async (req, res) => {
  const item = await Item.findById(req.params.id)
  res.render('editItem', { item })
}

exports.editItem = async (req, res) => {
  try {
    const { id } = req.params

  const item = await Item.findByIdAndUpdate(id, {
    name: req.body.itemName,
    category: req.body.itemCategory,
    quantity: req.body.itemQuantity,
    price: req.body.itemPrice,
    stockStatus: req.body.itemStatus,
    description: req.body.itemDescription
  }, { new: true })

  res.redirect(`/items/view/${id}`)
  } catch (err) {
    res.status(500).send('Server error!');
  }
}

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    await Item.findByIdAndDelete(id)
    res.redirect('/items');
  } catch (err) {
    res.status(500).send('Server error!');
  }
}
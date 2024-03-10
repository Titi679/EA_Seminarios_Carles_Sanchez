const mongoose = require('mongoose');

// Connection
mongoose.connect('mongodb://localhost:27017/ea-mongoose')
  .catch((error) => console.log(error));

// Madel and Interface
import { IUser, UserModel } from './models/User';
import { IProduct, ProductModel } from './models/Product';

async function Main() {

// One user
const user1: IUser = {
    "id": 1,
    "name": "Carles",
    "surname": "Sanchez",
    "email": "titicarles@gmail.com",
    "username": "Titi",
    "age": 22
}

// Insert User
const newUser= new UserModel(user1);
await newUser.save()
    .then( user => {
        console.log('User Inserted ' + user._id + ' ' + user.id) 
    })
    .catch( error => {
        console.log(error);
    });

// Insert Product
const newProduct = new ProductModel({id: 2, user: newUser._id, name: "Disco de Estopa", description: "El primer album", price: 10});
await newProduct.save()
    .then( Product => console.log(' Product Inserted '  + Product._id + ' ' + Product.id) )
    .catch( error  => console.log(' Product duplicated' ));

// Insert Product
const newProduct2 = new ProductModel({id: 3, user: newUser._id, name: "Aguita", description: "Fresquita", price: 4});
await newProduct2.save()
    .then( Product => console.log(' Product Inserted '  + Product._id + ' ' + Product.id) )
    .catch( error  => console.log(' Product duplicated' ));

//Find all products
await ProductModel.find({}).exec()
    .then( ProductFound => console.log(' Product: '  + ProductFound) )
    .catch((error) => {
      console.log(error);
    });    

//Find One Product
await ProductModel.findOne({id: 3}).exec()
    .then( ProductFound => {
        console.log(' Product: ' + ProductFound)
    })
    .catch((error) => {
      console.log(error);
    });

//Populate one product
await ProductModel.findOne({id: 2}).populate('user').exec()
    .then( ProductFound => {
        console.log(' Product with Populate ' + ProductFound)
    })
    .catch((error) => {
      console.log(error);
    });

//Update product name
await ProductModel.updateOne({id: 2}, {name: "cojín"}).exec()
    .then( () => console.log( ' Product changed '))
    .catch((error) => {
        console.log(error);
      });

//Find One Product
await ProductModel.findOne({id: 2}).exec()
.then( ProductFound => {
    console.log(' Product: ' + ProductFound)
})
.catch((error) => {
  console.log(error);
});

// Delete
await ProductModel.deleteMany({}).exec()
    .then( () => console.log( ' Products deleted '))
    .catch((error) => {
      console.log(error);
    });

await UserModel.deleteMany({}).exec()
    .then( () => console.log( ' Users deleted '))
    .catch((error) => {
      console.log(error);
    });

}

Main();
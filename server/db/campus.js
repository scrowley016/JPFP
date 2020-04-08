const Sequelize = require('sequelize')
const db= require('./database')


const Campus= db.define('campus',{
    name:{
        type:Sequelize.STRING,
        validate:{
            notEmpty:true
        }
    },
    address:{
        type:Sequelize.STRING,
        validate:{
            notEmpty:true
        }
    },
    description:{
        type:Sequelize.TEXT
    },
    imageUrl:{
        type:Sequelize.STRING,
        defaultValue: 'https://cdn.shopify.com/s/files/1/1119/4994/products/0_a28263b3-49bb-4ffa-acb5-851323420925.jpg?v=1527189923'
    }
})

module.exports=Campus
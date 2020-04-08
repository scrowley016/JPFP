const Sequelize = require('sequelize')
const db= require('./database')

const Students= db.define('students',{
    firstName:{
        type:Sequelize.STRING,
        validator:{
            notEmpty:true
        }
    },
    lastName:{
        type:Sequelize.STRING,
        validator:{
            notEmpty:true
        }
    },
    email:{
        type:Sequelize.STRING,
        validator:{
            notEmpty:true,
            isEmail: true
        }

    },
    imageUrl:{
        type:Sequelize.STRING,
        defaultValue:"https://cdn.shopify.com/s/files/1/1119/4994/products/0_a28263b3-49bb-4ffa-acb5-851323420925.jpg?v=1527189923"
    },
    gpa:{
        type:Sequelize.DOUBLE,
        validator:{
            min:0.0,
            max:4.0
        }

    }

})
module.exports =Students
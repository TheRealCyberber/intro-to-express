const express = require('express')
const validator = require('validator')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))



app.listen(3000, () => {
    console.log("welcome to my profile")
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/home', (req, res) => {
    res.send('<h2>This is my homepage</h2>')
})

app.get('/hello', (req, res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`Hello there ${name}. You are ${age} years old`)
})

app.get('/:itemNumber', (req, res) => {
    let item = req.params.itemNumber
    if (validator.isNumeric(item)) {
        res.send(`<h1>Item ${item}</h1>`)
    } else {
        res.send('<h1>Item not valid</h1>')
    }
    
})

app.get('/greet/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}`)
})


const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = 'pk_test_51HduyBEx9I2OJ4BXQcHy1gg1grN5Y70Ec74IiSHucdXzQBa5YEvw9uL9RiffgdDWu1QleiLAwN0D9WEhKzlPgbHh00aCKL79DX'
var Secret_Key = 'sk_test_51HduyBEx9I2OJ4BXHfYkYzADAdQBKCp8wgSAGtW6ioNKzf4WVAPqrZuyoAUK2Z7RetiLrqJH8eqLyBQT9oGNQl9e00pfBFG0gG'

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 3000 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
    res.render('Home', { 
    key: Publishable_Key 
    }) 
}) 

app.post('/payment', function(req, res){ 

    // Moreover you can take more details from user 
    // like Address, Name, etc from form 
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: 'Abdullah Waseem', 
        address: { 
            line1: '32/8 block f, nazimabad', 
            postal_code: '72550', 
            city: 'Karachi', 
            state: 'Sindh', 
            country: 'Pakistan', 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 1000000,    // Charing Rs 25 
            description: 'Donate for Lets Serve Humanity', 
            currency: 'PKR', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        res.send("Success") // If no error occurs 
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 

app.listen(port, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
})
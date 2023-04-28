const express = require('express');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const {Product} = require('./models/product');

const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json()); //req.body = {...}

//place your code below
let db = [
    {id: 1, username: 'John', password: '111'},
    {id: 2, username: 'Edward', password: '222'},
    {id: 3, username: 'admin', password: 'admin'},
    {id: 4, username: 'asad', password: 'asad'}
];

app.post('/login', (req, res, next)=> {
    const user = db.find(user => user.username === req.body.username && user.password === req.body.password);
    if(user){
        res.json({accessToken: `${user.id}-${user.username}-${Date.now().toString()}`})
    } else {
        res.json({error: 'Invalid username and password!'});
        // throw new Error('dfdfdf');
    }
});

// app.use((req, res, next) => {
//     const auth = req.headers.authorization;
//     // console.log();
//     const token = auth.split(' ')[1]
//     if(token === 'null'){
//         res.json({error: 'No Access Token'});
//     } else {
//         req.user = token.split('-')[0];
//         next();
//     }
// })


app.use('/products', productRouter);

app.use('/order',orderRouter)
app.use('*',(res,req,next) => {
    throw new Error("Error occured");
})

app.use((error,req, res, next) => {
    res.status(404).send(new Error("This is error"))
})


app.listen(3001, ()=>console.log('listen on 3001'));
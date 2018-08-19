const webpush = require('web-push');
const config = require('./config/webpush');

const express = require('express');

const app = express();
const path = require('path');

const publicKey = config.public;
const privateKey = config.private;
app.use(express.static(path.join(__dirname+ '/client')));

app.use(require('body-parser').json());

webpush.setVapidDetails('mailto:mtuan.0111@gmail.com',publicKey, privateKey);


app.post('/subscribe', (req,res)=>{
    const subscription = req.body;

    const payload = JSON.stringify({data: {title: 'Testing', items: [{name:'item1', price: 200},{name:'item2', price: 300}]}});
    webpush.sendNotification(subscription, payload)
    .catch((err)=>{
        console.log('*******hehehe ERROR', err);
    })
    return res.json({subscription, payload})
})


app.listen(3000, (req,res)=>{
    console.log('Ya!')
})





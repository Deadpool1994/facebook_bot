const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.send('Hello Youtube!');
});


app.get('/webhook/', (req, res)=>{
  if(req.query['hub.verify_token'] ===
      'my_voice_is_my_password'){
        res.send(req.query['hub.challenge'])
      }
  res.send('No entry');
});

app.listen(app.get('port'), ()=>{
  console.log('running on port', app.get('port'));
})

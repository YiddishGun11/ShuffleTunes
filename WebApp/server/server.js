const express = require('express');
const app = express();

app.get('/api',(req, res)=>{
    res.json({'users': ["userOne", "userTwo","userThree"]})
})

app.get('/', (req, res)=>{
    res.json("hello bitches")
})

app.listen(5000, ()=>{console.log("server running on port 5000")})
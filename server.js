const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('This is my port 4000')
})

app.listen(4000, () => {
    console.log(`Server started`)
})

function handleLogin(req, res) {
  console.log(req.body)
  res.json({result:"Success"}) 
}

function handleRegister (req, res) {
  console.log(req.body)
  res.json({result:"Success"})
}

app.post('/register', handleRegister)
app.put('/login', handleLogin) 
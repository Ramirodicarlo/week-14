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
  const newUser = {
    email: req.body.email,
    password: req.body.pass
  };
  res.status(200).json({
    result: 'Sucess',
    data: newUser
  });
}

function handleRegister (req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass,
    confirmPassword: req.body.cpass
  };
  res.status(200).json({
    result: 'Sucess',
    data: newUser
  });
}

app.post('/register', handleRegister)
app.put('/login', handleLogin) 
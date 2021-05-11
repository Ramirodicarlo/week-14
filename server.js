const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const users = [];

app.get('/', (req, res) => {
  res.send('This is my port 4000')
});
app.listen(4000, () => {
  console.log(`Server started`)
})
function handleLogin(req, res) {
  const userData = {
    email: req.body.email,
    pass: req.body.pass
  }
  const userFromDB = users.find(user => {
    if (user.email === userData.email && user.password === userData.pass) {
      return true;
    }
    return false;
  });
  if (userFromDB) {
    return res.status(200).json({
      result: 'Sucess',
      data: userFromDB
    });
  }
  return res.status(401).json({
    result: 'Unauthorized'
  });
}
function handleRegister (req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass
  };
  users.push(newUser);
  res.status(200).json({
    result: 'Sucess',
    data: newUser
  });
}
app.post('/register', handleRegister)
app.put('/login', handleLogin) 
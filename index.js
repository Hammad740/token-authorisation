const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const users = [];
function generateToken() {
  let options =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 32; i++) {
    token += options.charAt(Math.floor(Math.random() * options.length));
  }
  return token;
}

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({ username, password });
  res.json({
    message: 'Sign up successful!',
  });
});

app.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;
  for (let index = 0; index < users.length; index++) {
    if (
      users[index].username === username &&
      users[index].password === password
    ) {
      foundUser = users[index];
    }
  }
  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;
    res.json({ message: token });
  } else {
    res.status(403).send({
      message: 'User not found!,',
    });
  }
  console.log(users);
});

app.get('/me', (req, res) => {
  const token = req.headers.token;
  const foundUser = users.find((user) => user.token === token);
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: 'User not found!',
    });
  }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index/index.html');
})

app.get('/sign-up', (req, res) => {
  res.sendFile(__dirname + '/frontend/index/sign-up.html');
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/frontend/index/login.html');
})

app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/frontend/index/user.html');
})

app.post("/login", (req, res) => {
  const {
    username,
    password
  } = req.body;

  if (username === "admin" && password === "password") {
    res.json({
      status: "success",
      message: "Login successful!",
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "Incorrect username or password.",
    });
  }
});

app.post("/sign-up", (req, res) => {
  const {
    username,
    password,
    con_password
  } = req.body;

  if (password === con_password) {
    res.json({
      status: "success",
      message: "Login successful!",
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "Incorrect password.",
    });
  }
});

app.listen(3000, () => console.log('running at 3000...'));

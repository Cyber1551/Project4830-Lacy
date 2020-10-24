const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const mongojs = require("mongojs");
const cors = require("cors");
const bodyParser = require("body-parser");
const e = require("express");
const port = 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://172.31.37.130:80"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send("HELLO WORLD");
})
const db = mongojs(
  "mongodb://root:Password12345@ds011860.mlab.com:11860/project4830"
);
const users = db.collection("users");

/*
io.on("connection", (socket) => {
  console.log("User Connected!");
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
  socket.on("login", (data) => {
    console.log(data);
    db.users.findOne(
      {
        username: data.username,
      },
      (err, res) => {
        console.log(res);
      }
    );
  });
  socket.on("register", (username, password) => {});
});
*/

var isValidPassword = function (data, cb) {
  db.account.find(
    { username: data.username, password: data.password },
    function (err, res) {
      if (res.length > 0) {
        cb(true);
      } else {
        cb(false);
      }
    }
  );
};
var isUsernameTaken = function (data, cb) {
  db.account.find({ username: data }, function (err, res) {
    console.log(res);
    if (res.length > 0) {
      cb(true);
    } else {
      cb(false);
    }
  });
};
var addUser = function (data, cb) {
  db.account.insert(
    {
      username: data.username,
      password: data.password,
    },
    function (err) {
      cb();
    }
  );
};

app.post("/login", async (req, res) => {
  console.log("LOGIN: ");
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  if (!user) {
    res.send(null);
  } else {
    isValidPassword(user, function (result) {
      if (result) {
        db.account.find({ username: user.username }).toArray(function (err, doc) {
          if (err) {
            res.send({ success: false });
            throw err;
          } else {
            console.log(doc);
            res.send({ success: true, username: doc.username });
          }
        });
      } else {
        res.send({ success: false });
      }
    });
  }
});

app.post("/register", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  
  if (!user) {
    res.send(null);
  } else {
    isUsernameTaken(user.username, function (err) {
      console.log(err);
      if (err) {
        res.send({ success: false });
      } else {
        console.log("REGISTER");
        addUser(user, function () {
          res.send({ success: true });
        });
      }
    });
  }
});
server.listen(port, (error) => {
  if (error) console.error("Something when wrong!", error);
  else console.log("Server is listening on port " + port);
});

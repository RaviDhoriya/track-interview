const { User } = require("../model");
const { Success, Error, JWT_SECRET } = require("../common/helper");
const crypto = require("crypto");
var jwt = require("jsonwebtoken");

const api = {};
api.signup = async (req, res) => {
  var { body } = req;
  var email = "";
  if (body.email) {
    email = body.email.trim();
    let exist = await User.find({ email: email });
    if (exist.length > 0) {
      res.send(Error("Given email address is already registered"));
      return;
    }
  }
  var user = new User();
  user.name = body.name ? body.name.trim() : "";
  user.email = email.trim();
  user.password = crypto.createHash("md5").update(body.password).digest("hex");
  user.stamp = new Date();
  user.save((err, newUser) => {
    var token = jwt.sign(
      {
        data: JSON.stringify(newUser),
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.send(Success({ token: token, user: newUser }, "Signup successful"));
  });
};
api.getProfile = (req, res) => {
  res.send(Success(req.decoded, "Good"));
};
api.login = (req, res) => {
  var { body } = req;
  var {email = "", password = ""} = body;
  var passwordMD = crypto.createHash("md5").update(password).digest("hex");
  User.find({ email: email, password: passwordMD }, (err, users) => {
    if (err) {
      res.send(Error("Email address or password is wrong."));
    } else {
      var user = users[0];
      user.last_login = new Date();
      user.save((err2, newUser) => {
        var token = jwt.sign(
          {
            data: JSON.stringify(newUser),
          },
          JWT_SECRET,
          { expiresIn: "1d" }
        );
        res.send(Success({ token: token, user: newUser }, "Login successful"));
      });
    }
  });
};
module.exports = api;

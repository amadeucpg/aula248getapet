const User = require("../models/User");

module.exports = class UserController {
  static async register(req, res) {
    const name = req.body.name;

    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    }
  }
};

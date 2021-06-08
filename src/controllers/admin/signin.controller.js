const { User } = require("../../models");

const bcrypt = require("bcryptjs");
const devConfig = require("../../config/dev.json");

module.exports = {
  index: async (req, res) => {
    const user = await User.findAll();
    res.render("admin/signin/index", {
      layout: false,
    });
  },
};

module.exports = {
  index: async (req, res) => {
    res.render("admin/dashboard/index", {
      layout: "admin/layouts/layout.ejs",
    });
  },
};

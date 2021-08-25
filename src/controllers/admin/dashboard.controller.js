module.exports = {
  index: async (req, res) => {
    // res.json(req.session);

    // res.render("admin/dashboard/index", {
    //   layout: "admin/layouts/layout.ejs",
    // });
    res.redirect("/admin/cinema");
  },
};

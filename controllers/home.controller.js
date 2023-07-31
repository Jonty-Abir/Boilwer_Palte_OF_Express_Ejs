function homeController(req, res, next) {
  res.render("index",{ msg:"its work"});
}

module.exports = { homeController };

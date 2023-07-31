function defaultErrorHandler(err, req, res, next) {
  if (err) {
    res.status(500).send(err.message);
  }
}
function notFoundHandler(req, res, next) {
  res.status(404).send("404");
}
module.exports = { defaultErrorHandler, notFoundHandler };

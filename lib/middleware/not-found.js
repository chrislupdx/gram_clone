module.exports = (req, res, next) => {
  const error = new Error('404ed');
  error.status = 404;
  next(error);
};

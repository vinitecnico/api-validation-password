const isValid = (req, res) => {
  const value = req.body.value || "";

  const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()-+]).{9,}$/;
  const repeated = /(.)(?=.*\1)/;
  const space = /[\n# $&:\n\t]/;
  if (!value.match(space) && value.match(password) && !value.match(repeated)) {
    return res.status(200).send({ valid: true });
  }

  return res.status(200).send({ valid: false });
};

module.exports = { isValid };

const functions = require("@google-cloud/functions-framework");

functions.http("div", (req, res) => {
  const num1 = parseInt(req.query.X);
  const num2 = parseInt(req.query.Y);

  const result = num1 / num2;

  const response = {
    X: num1,
    Y: num2,
    result: result,
  };

  res.json(response);
});

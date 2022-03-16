const pa11y = require("pa11y");

module.exports = async function (context, req) {
  try {
    const results = await pa11y(req.body.url);
    console.log(results);
    context.res = {
      status: 200 /* Defaults to 200 */,
      body: {
        data: results,
        message: "Quick Test Performed",
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.log(err);
    context.res = {
      status: 500,
      body: "Something went wrong",
    };
  }
};

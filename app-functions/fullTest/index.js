const pa11y = require("pa11y");
const config = {
  includeNotices: true,
  includeWarnings: true,
};

module.exports = async function (context, req) {
  try {
    const results = await pa11y(req.body.url, config);
    console.log(results);
    context.res = {
      status: 200 /* Defaults to 200 */,
      body: {
        data: results,
        message: "Full Test Performed",
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

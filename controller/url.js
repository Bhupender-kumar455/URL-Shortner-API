const shortid = require("shortid");
const URL = require("../model/schema");
const minID = shortid();

// post
async function handleGetURL(req, res) {
  const mew = req.body.url;
  const one = await URL.create({
    shortid: minID,
    redirectURL: mew,
    visitHistory: [],
  });
  return res.status(200).json({ id: minID });
}

//  get
async function handleRedirectURL(req, res) {
  const mini = req.params.miniID;
  URL.findOneAndUpdate(
    { shortid: mini },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  ).then((url) => {
    if (url) {
      res.status(200).redirect(url.redirectURL);
    } else {
      console.log("url not found");
    }
  });
}
async function handleGetAnalytic(req, res) {
  const mini = req.params.minID;
  URL.findOneAndUpdate({ shortid: mini }).then((url) => {
    return res.json({
      totalClick: url.visitHistory.length,
      analytic: url.visitHistory,
    });
  });
}

module.exports = { handleGetURL, handleRedirectURL, handleGetAnalytic };

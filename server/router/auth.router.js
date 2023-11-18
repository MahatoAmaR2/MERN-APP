const express = require("express");
const router = express.Router();
// two way to define route 
// 1st -->
// router.get("/", (req, res) => {
//   res.status(200).send("Har Har Mahadev");
// });
// 2nd -->
router.route("/").get((req, res) => {
  res.status(200).send("Har Har Mahadev2");
});
module.exports = router;

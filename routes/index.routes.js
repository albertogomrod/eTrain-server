const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth.routes.js")
router.use("/auth", authRoutes)

const blogRoutes = require("./blog.routes.js")
router.use("/blog", blogRoutes)

const uploadRoutes = require("./upload.routes");
router.use("/upload", uploadRoutes);

module.exports = router;

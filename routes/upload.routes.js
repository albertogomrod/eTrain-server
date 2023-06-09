const router = require("express").Router();

const uploaderBlog = require("../middlewares/cloudinary-blog.js");

// POST "/api/upload/hackaton" => Sube la imagen del blog a crear
router.post("/blog", uploaderBlog.single("photo"), (req, res, next) => {
  if (!req.file) {
    next("No file uploaded!");
    return;
  }
  res.json({ photo: req.file.path });
});

module.exports = router;
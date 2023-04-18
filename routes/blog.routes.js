const router = require("express").Router();
const isAuthenticated = require("../middlewares/auth.middlewares");
const Blog = require("../models/Blog.model")


// GET "/api/blog" => enviar la lista de entradas, solo los titulos
router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const response = await Blog.find().select("title")
    res.json(response)
  } catch (error) {
    next(error)
  }
})

// POST "/api/blog" => crear un nueva entrada de blog
router.post("/", async (req, res, next) => {

  // console.log(req.body)

  const { title, subtitle, description, photo } = req.body

  try {
    
    const response = await Blog.create({
      title,
      subtitle,
      description,
      photo,
    })

    // res.json(response)
    res.status(200).json()

  } catch (error) {
    console.log(error)
    next(error)
  }

})

// GET "/api/blog/:blogId" => enviar los detalles de un blog por su id
router.get("/:blogId", async (req, res, next) => {

  console.log(req.params)
  const { blogId } = req.params;

  try {
    
    const response = await Blog.findById(blogId)
    res.json(response)

  } catch (error) {
    next(error)
  }
})

// DELETE "/api/blog/:blogId" => borrar un Blog por su id
router.delete("/:blogId", async (req, res, next) => {

  const { blogId } = req.params;

  try {
    
    await Blog.findByIdAndDelete(blogId)
    res.json("Todo bien, documento borrado")

  } catch (error) {
    next(error)
  }

})

// PATCH "/api/blog/:blogId" => recibir la info de actualización y actualizará un Blog por su id
router.patch("/:blogId", async (req, res, next) => {

  const { blogId } = req.params;
  const { title, subtitle, description, photo } = req.body;

  try {
    
    await Blog.findByIdAndUpdate(blogId, {
      title,
      subtitle,
      description,
      photo,
    })

    res.json("Blog bien, documento actualizado")

  } catch (error) {
    next(error)
  }

})


module.exports = router;
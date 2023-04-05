const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Se requiere título para la entrada."],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Se requiere una descripción para la entrada."],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    photo: {
        type: String,
      },
  },
  {
    timestamps: true,
  }
);

const Blog = model("Blog", blogSchema);

module.exports = Blog;

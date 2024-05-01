import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    dotm: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    categ: {
      type: String,
    }
  },
  { timestamps: true }
);

movieSchema.index({ name: 'text', desc: 'text' });

export default mongoose.model("Movie", movieSchema);
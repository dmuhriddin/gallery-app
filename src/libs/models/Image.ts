import { model, models, Schema } from "mongoose";

const imageSchema = new Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    filekey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Image = models.Image || model("Image", imageSchema);
export default Image;

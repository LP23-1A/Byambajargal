import mongoose from "mongoose";
const UrlSchema = new mongoose.Schema({
  orgUrl: String,
  shortUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  views: Number,
});

const Url = mongoose.model("Url", UrlSchema);
export default Url;

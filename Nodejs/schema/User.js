import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const User = mongoose.model.apply("User", UserSchema);
export default User;

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const Userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: {type: Boolean, required:true}
},
{collection:"requested-users"}
);


const User = mongoose.model("user", Userschema)
module.exports = User
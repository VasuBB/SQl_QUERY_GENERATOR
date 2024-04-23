const mongoose=require("../configs/db");
const user_signup=mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})
const user=mongoose.model('users',user_signup);
module.exports={
    user
}
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type : String,
     //   required:[true,"please enter the name"],
        unique: true,
    },
    email:{
        type : String,
        required:[true,"please enter the email"],
        unique: true,
    },
    team_name:{
        type : String,
      //  required:[true,"please enter the team_name"],
        unique: true,
    },
    college:{
        type : String,
     //   required:[true,"please enter the college"],
    },
    phone:{
        type : String,
     //   required:[true,"please enter the name"],
        unique: true,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    
    
});

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;
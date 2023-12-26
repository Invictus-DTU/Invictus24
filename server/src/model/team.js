import mongoose from "mongoose";
import {User} from "./User";
const teamSchema = new mongoose.Schema({
    teamname:{
        type : String,
    },
    teamId:{
        type : String,
        unique: true,
    },
    teamLeader:{type: mongoose.Schema.Types.ObjectId,
        ref:User,
    },
    event:{
        type : String,
    },
    member: [
        {type: mongoose.Schema.Types.ObjectId,
        ref:User,
    },]  
});

const Team = mongoose.model("Team",teamSchema);
export default Team;
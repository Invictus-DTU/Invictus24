import { NextResponse } from "next/server";
<<<<<<< HEAD
import User from '../../models/user'
import config from '../../helper/config'
=======
import User from '../../../model/User';
import config from '../../../helper/config';
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
config();

export async function POST(req) {
    try{
        const reqBody= await req.json();
<<<<<<< HEAD
        const {name,email,college,phone} = reqBody.formData;
        
        const user = await User.findOne({email: email});
=======
        const {username,email,college,phone} = reqBody;
   
        const user = await User.findOne({email});
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
        if(user){
            return NextResponse.json({error: "Already exist"},{status: 400});
        }
        else{
<<<<<<< HEAD
            console.log(name)
            const newUser = new User({
                username: name,
                email: email,
                college: college,
                phone: phone
            });
=======
            const newUser = new User({username,email,college,phone});
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
            await newUser.save();
            return NextResponse.json({
                message: "user created successafully"
            });
        }
    }
    catch(err){
<<<<<<< HEAD
        console.log(err)
=======
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
        return NextResponse.json({error: err.message},{status:500});
    }
    const user= await req.json();
    
    return NextResponse.json(user)
}
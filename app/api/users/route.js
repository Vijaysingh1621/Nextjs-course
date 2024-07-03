import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs'

// All users data 

export function GET(){
    const data=users;
    return NextResponse.json({data},{
        status:200
    });
}

// 4. Cerate User 

export async function POST(req,res){
    let{id, name, email, password}=await req.json();

    // check if the data is provided 
    if(!id || !name || !email || !password){
        return NextResponse.json({result:"required fields not found"},{status:400});
    }else{ 
        // add new user 
        users.push({id,name,email,password})

        // extract just the user array from the updated data
        const updatedUsersArray=users;

        const updatedData = JSON.stringify(updatedUsersArray,null,2);

 
        // write the updated users array to a json string
        fs.writeFileSync(
            "./app/util/db.js",`export const users=${updatedData};`,"utf-8")
        
            return NextResponse.json({success:"User Created sucessfully."})
    }
}

    // 5. Update users

export async function PUT(req,res){
    let{id, name, email, password}=await req.json();
        
    const userIndex =users.findIndex((user)=>user.id==id)

    if(userIndex==-1){
        return NextResponse.json({result:"User not found", status:404})
    }
    if(name){
        users[userIndex].name=name
    }
    if(email){
        users[userIndex].email=email
    }
    if(password){
        users[userIndex].password=password
    }
    
    const updatedUsersArray=users;

    const updatedData = JSON.stringify(updatedUsersArray,null,2);


    // write the updated users array to a json string
    fs.writeFileSync(
        "./app/util/db.js",`export const users=${updatedData};`,"utf-8")
    
        return NextResponse.json({success:"User Updated sucessfully."})

}
import express from 'express';
import mongoose from 'mongoose';
import User from './registratonSchema';
import jwt from 'jsonwebtoken';
export const userRouter = express.Router()

userRouter.get('/login', async(req:any,res:any) => {
const username=req.query.username;
const password=req.query.password;
if(username && password){
    try{
        const user=await User.findOne({username:username,password:password});
        if(user){
            res.json(true);
        }else{
            res.json(false);
        }
        
    }
    catch(err){
        res.send("Error "+err);
    } 
}}
);
userRouter.get('/', async(req:any,res:any) => {
    
    try{
           const user = await User.find({});
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }

})
userRouter.post('/registration', async(req:any,res:any) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        address: req.body.address       
    })
    try{
        const u1 =  await newUser.save() 
        res.json(u1)
    }catch(err){
        res.send('Error...')
    }
})
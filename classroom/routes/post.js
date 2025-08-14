const express=require("express");
const router=express.Router();
//posts

router.get("/",(req,res)=>{
    res.send("GET for posts");
 });
router.get("/:id",(req,res)=>{
    res.send("GET for post id");
 });
router.post("/",(req,res)=>{
    res.send("POST for users");
 });
router.delete("/:id",(req,res)=>{
    res.send("DELETE for users");
 });
module.exports=router;
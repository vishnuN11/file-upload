const express=require("express")

const router=express.Router()
const path=require("path")
const multer=require("multer")
const { registerUser, AllUser, deleteManyData } = require("../controller/user-controller")

// file upload

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/upload")
    },
    filename:function(req,file,cb){
        const ext=path.extname(file.originalname)
        const fn="profile-pic"+Date.now()+ext
req.body.pic="upload/"+fn

        cb(null,fn)
    }
})

const upload=multer({storage:storage})


router.route("/register").post(upload.single("avatar"),registerUser).get(AllUser).delete(deleteManyData)


module.exports=router
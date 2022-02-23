const user=require("../model/user-model")


exports.registerUser=async(req,res)=>{
    const result=await user.create(req.body)
    try {
        res.json({
            success:true,
            message:"user register",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error
        })
    }
}

exports.AllUser=async(req,res)=>{
    const result=await user.find()
    try {
        res.json({
            success:true,
            message:"user register",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error
        })
    }
}

exports.deleteManyData=async(req,res)=>{
    const result=await user.deleteMany()
    try {
        res.json({
            success:true,
            message:"user register",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error
        })
    }
}
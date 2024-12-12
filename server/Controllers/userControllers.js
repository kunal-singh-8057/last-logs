const usermodels = require("../Models/usermodels");
const bcrypt = require("bcrypt");



const addusers = async(req,res)=>{
     const {username,password} = req.body;
     bcrypt.hash(password,10)
     .then(hash=>{
         usermodels.create({username,password:hash})
     }).catch((error)=>{
        console.log(error)
     })
}

const viewusers = async(req,res)=>{
const view = await usermodels.find();

res.status(200).json({
    success:true,
    view
})
}


const deleteusers = async(req,res)=>{
const id = req.params.id;

const del = await usermodels.findByIdAndDelete(id);

res.status(200).json({
    success:true,
    del
})
}


const login = async(req,res)=>{
    const {username,password} = req.body
   await usermodels.findOne({username:username})
    .then((user)=>{
        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{
                if(err){
                    res.json("Sorry Wrong password")
                }

                else{
                    res.json("success")
                }
            })
        }else
        {
            res.json("Not a user")
        }
    })
}

module.exports = {addusers,viewusers,deleteusers,login}
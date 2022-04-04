



// const jwt = require("jsonwebtoken")

// const verifyToken=(req,res,next)=>{
//     try{
//         var token=req.cookies.jwt
//         console.log(token)
//         var decode =jwt.verify(token,'Key')
//         req.userdata=decode
//         console.log(decode)
//         next()
//     }catch(err){
//         console.log(err)
//         res.send ({message:'invalid token'})
//     }
// }


const verifyToken=(req,res,next)=>{
        try{
            var token=req.cookies.jwt
            console.log(token)
            var decode =jwt.verify(token,'Key')
            req.userdata=decode
            console.log(decode)
            next()
        }catch(err){
            console.log(err)
            res.send ({message:'invalid token'})
        }
    }

module.exports ={ verifyToken}
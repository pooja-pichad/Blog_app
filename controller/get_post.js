
const jwt=require("jsonwebtoken")
const knex=require("../model/table")



const post_data = (req, res) => {
    const user={
        user_id: req.userdata.user_id,
        title: req.body.title,
        text: req.body.texto
    }
    console.log(user)
    knex("post_data").insert(user)
        .then((data) => {
            res.send({message:"post successfully"})
        })
        .catch((err) => {
            if (err) {
                // console.log(err);
                res.status(400).send({ error: err })
            }
        })

}

const get_posts=(req,res)=>{
    knex.from("post_data").select("*").where("post_id",req.params.post_id)
    .then((row) =>{
        res.send(row)
    })
    .catch((err)=>{
        res.json({
            message:err
        })
    })  
}



module.exports={post_data,
                get_posts}
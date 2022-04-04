const mysql=require("mysql")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
// const cookieParser = require('cookie-parser')
const knex=require("../model/table")


const likedislike = (req, res) => {
    console.log(req.userdata.user_id)
    knex.from('post_data').select('title').where('post_id', req.body.post_id).then((info) => {
        if (info.length == 0) {
            res.status(403).send("post is not found")
        } else {
            knex("likedislike").select("*").where({ user_id: req.userdata.user_id, 
                                                    post_id: req.body.post_id})
                .then((result) => {
                     console.log(result); //this result console the ids
                    if (result.length > 0) {
                        res.send('u have already liked/dislike post')
                    } else {
                        knex('likedislike').insert( {post_id: req.body.post_id, 
                                                    like: req.body.like, 
                                                    dislike: req.body.dislike, 
                                                    user_id: req.userdata.user_id})
                            .then((result) => {
                                res.send({ sucess: "add response " })
                            })
                            .catch((err) => {
                                if (err) throw err;
                                res.status(403).send({ error: err });
                            })
                    }
                })
            
        }
    })
    
}
const get_likedislike=(req,res)=>{
    knex('post_data').innerJoin("likedislike","post_data.post_id","=","likedislike.post_id").select("post_data".user_id,"post_id.title","post_data.text","likedislike.like","likedislike.dislike")
    .then((row)=>{
        res.send(row)          //The inner join is used to select all rows from tables for the match 
                                 //between the columns in table
    }).catch((err)=>{
        res.json({
            message:err
        })
    })
}




module.exports={likedislike,
                get_likedislike}
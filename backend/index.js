const express= require('express');
const server = express();
const mysql = require('mysql');
const cors= require('cors');

const db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'Custodio97@',
  database:'crud',
});

server.use(express.json());
server.use(cors());

server.post('/add', (req,res)=>{
    const {name} = req.body;
    const {cost} = req.body;
    const {category}= req.body;

    let sql = "INSERT INTO games (name, cost, category) VALUES(?,?,?)";
    db.query(sql,[name,cost,category], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
});

server.get('/games', (req, res)=>{
    let sql = "SELECT * FROM games";
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
});


server.put('/edit', (req, res)=>{
    const {name} = req.body;
    const {cost} = req.body;
    const {category} = req.body;
    const {id} = req.body;

    let sql = "DELETE FROM games WHERE id = ?"

    db.query(sql,[name,cost,category,id], (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

server.delete('/delete/:index', (req, res)=>{
    const {index} = req.params;
    let sql ="DELETE FROM games WHERE id = ?"
    db.query(sql,[index], (err,result)=>{err ? console.log(err) : console.log(result)})
});

server.listen(8080,()=>{
    console.log('Running the port 8080')
})
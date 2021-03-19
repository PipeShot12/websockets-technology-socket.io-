const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');


const pool = mysql.createPool({
    connectionLimit:20,
    host:'localhost',
    user:'root',
    password:'Jadecita9512',
    database:'chatapp'
    
});
router.use(express.json());
router.use(express.urlencoded({extended:true}));


function validateEmail(emailUser,passwordUser,confirm){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = re.test(emailUser) ? true:false;
    const password = passwordUser === confirm ? true : false;
    return email && password ? true : false;
};

router.post('/api/v1/clients',(req,res)=>{
    if(validateEmail(req.body.email,req.body.password,req.body.cPassword)){ 
      
        pool.getConnection((error,connection)=>{
            const  existingEmail= `
            SELECT * FROM clients WHERE email = ${connection.escape(req.body.email)}
            `;
            connection.query(existingEmail,(error,result,fields)=>{

                if(result.length > 0 ){
                    res.status(406);
                    res.json({errors:['Already exist this email']})
                }else{
                    const uuid = uuidv4();    
                    const newUser = `
                    INSERT INTO clients (name,email,password,chat_id)
                    VALUES 
                    (${connection.escape(req.body.name)},
                    ${connection.escape(req.body.email)},
                    ${connection.escape(req.body.password)},
                    ${connection.escape(uuid)})
                    `;
                    connection.query(newUser,(error,result,fields)=>{
                        
                    const idNewUser = result.insertId ; 
                    const returnUser = `
                    SELECT * FROM clients WHERE id = ${idNewUser}
                    `;
                    connection.query(returnUser,(error,result,fields)=>{
                        res.status(201);
                        res.json({data:[{email:result[0].name,chatId:result[0].chat_id}]});
                            })
                     })
                };
            })
        })
        
    }else{
        res.status(406);
        res.json({errors:['These data are invalidated, Try it again']})
    };
});

//login

router.post('/api/v1/login',(req,res)=>{

        pool.getConnection((error,connection)=>{
            const  login= `
            SELECT * FROM clients WHERE email = ${connection.escape(req.body.email)}
            AND password = ${connection.escape(req.body.password)}`;
            connection.query(login,(error,result,fields)=>{

                if(result.length > 0 ){
                    res.status(201);
                    res.json({data:[{name:result[0].name,chatId:result[0].chat_id}]});

                }else{
                    res.status(401)
                    res.json({erros:['These user data are not match in our database']})    
                };
            })
        })  
    
});


module.exports = router;


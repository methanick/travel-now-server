require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
app.use(cors())
app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/attractions',(req,res)=>{
    connection.query(
        'SELECT * FROM attractions',
        function(err,results,ffields){
            res.send(results)
        }
    )
})
app.listen(process.env.PORT || 3000)
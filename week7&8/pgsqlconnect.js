const {Client} = require('pg')

const client = new Client({
    user:"postgres",
    password:"Abhishek@2003",
    host:"localhost",
    database:"TestDB",
    port:"5432"
})


client.connect().then(()=>console.log("connected to database")).catch(err=> console.log("db connect err",err))

module.exports = {
    client
}
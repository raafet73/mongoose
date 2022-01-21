const express = require("express")
const app = express()
const connectDB = require("./config/connectDB")


app.use( express.json())


connectDB()

//routes
app.use("/contacts",require("./models/routes/contact"))


const port = process.env.PORT || 5000
app.listen(port, err =>
    err? console.log("erreur"):console.log ( `server in running on port ${port}`)
    )
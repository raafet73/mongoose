const mongoose = require("mongoose")
const config =   require('config')


const connectDB = () => {
    mongoose.connect(config.get("MONGOURI"),{ useUnifiedTopology: true , useNewUrlParser: true  } )
        .then(()=>console.log("mongoose Connected"))
        .catch(()=>console.log("erreur Data"))
}
module.exports=connectDB
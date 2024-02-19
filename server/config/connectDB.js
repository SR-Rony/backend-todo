const mongosse = require("mongoose")
const { mongoUrl } = require("../secrict");

const connectDB = async()=>{
    try{
        await mongosse.connect(mongoUrl)
        .then(()=>console.log('server is connect'))
        .catch((error)=>console.error('server is not connect:',error))
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB
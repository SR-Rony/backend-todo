const mongosse = require("mongoose")
const PORT = 8000;

const connectDB = async()=>{
    try{
        await mongosse.connect("mongodb+srv://todo-list:en3O9R7akP9FS96P@cluster0.j8pcorh.mongodb.net/todo-list?retryWrites=true&w=majority")
        .then(()=>console.log('server is connect'))
        .catch((error)=>console.error('server is not connect:',error))
    }catch(err){
        console.log(err);
    }
}

module.exports = {connectDB,PORT}
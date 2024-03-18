const app = require("./app")
const connectDB = require("./config/connectDB");
const {PORT } = require("./secrict");



app.listen(PORT,async()=>{
    console.log(`my server is runing at http://localhost:${PORT}`);
   await connectDB()
})
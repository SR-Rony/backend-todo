const app = require("./app");
const { connectDB,PORT } = require("./secrict");



app.listen(PORT,async()=>{
    console.log(`my server is runing at http://localhost:${PORT}`);
   await connectDB()
})
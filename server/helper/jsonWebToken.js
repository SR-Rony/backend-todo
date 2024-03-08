const jwt = require('jsonwebtoken');
const createJsonWebToken =(paylod,secrictKey,expiresIn)=>{
    if(typeof paylod !== "object"|| !paylod){
        throw new Error('paylod must be non-empty object')
    }
    if(typeof secrictKey !== "string"|| !secrictKey){
        throw new Error('secrictKey must be non-empty string')
    }
    try{
        const token = jwt.sign(paylod, secrictKey,{expiresIn});
        return token
    }catch(error){
        console.error(error);
        throw error
    }
}

module.exports = createJsonWebToken
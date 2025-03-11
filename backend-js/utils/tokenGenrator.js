import jsonwebtoken from "jsonwebtoken";

function genratToken({id, name,email, }){
    return jsonwebtoken.sign({id, name, email }, process.env.key)
}

function verifyToken(token) {
    if(!token) return null;
    return jsonwebtoken.verify(token, process.env.key)
}

export {genratToken, verifyToken}
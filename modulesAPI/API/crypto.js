/*
    Crypto Functions v.0.0.1b
    Created by Eduardo Zamora
    Licencia Open Source
*/

const Crypto = {}

const cryptoAdd = (encryp) =>{
    let encrypFirsh = ""
    let finalyEncryp = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i = 0; i < encryp.length; i++){
        encrypFirsh += encryp[i]+ possible.charAt(Math.floor(Math.random() * possible.length));
    }

    for(var j = 0; j < encrypFirsh.length; j++){
        finalyEncryp += encrypFirsh[j] + possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return finalyEncryp
}

const desencryp = (descryp) =>{
    let estado = true
    let descrypFirsh = ""
    let finalyDescryp = ""
    let basura = ""

    for(var i = 0; i < descryp.length; i++){
        if(estado === true){
            descrypFirsh += descryp[i]
            estado = false
        }else{
            basura += descryp[i]
            estado = true
        }
    }

    estado = true
    for(var j = 0; j < descrypFirsh.length; j++){
        if(estado === true){
            finalyDescryp += descrypFirsh[j]
            estado = false
        }else{
            basura += descrypFirsh[j]
            estado = true
        }
    }

    return finalyDescryp
}


Crypto.cryptoAdd = cryptoAdd
Crypto.desencryp = desencryp

module.exports = Crypto
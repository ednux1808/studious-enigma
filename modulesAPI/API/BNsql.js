/*
    @author :: Eduardo Zamora
    @version :: 0.1a
    @lincecia :: MIT 
*/
const ArrayBDS = {}

const existeUser = (archivoEcryp, user, pass) =>{
    var posicionArrayUser = 0
    var posicionArrayPass = 0
    var usersArray = []
    var userActual = ""
    var passArray = []
    var passActual = ""
    var estado = true

    for(var i = 0; i < archivoEcryp.length; i++){
        if(estado === true){
            //Es un username
        if(archivoEcryp[i] === 'ª'){
            usersArray[posicionArrayUser] = userActual
            userActual = "" //LimpiarVariable
            posicionArrayUser ++ //incrementoPosicion
            let basura = archivoEcryp[i]
            estado = false
        }else{
            userActual += archivoEcryp[i]
        }
    }else{
        
       if(archivoEcryp[i] === 'ª'){
           passArray[posicionArrayPass] = passActual
           passActual = ""
           posicionArrayPass ++
           let basura = archivoEcryp[i]
           estado = true
       }else{
           passActual += archivoEcryp[i]
       }
    }
    }

    var badera = false
    for(var j = 0; j < usersArray.length; j++){
        if(usersArray[j] === user){

          if(passArray[j] === pass){
             return  true // console.log(`El usuario ${user} y el pass si conciden`)

          }else{
             return  alert(`El pass no concide con el usuario`)
          }
        }
    }

   return  false//console.log(`El usuario ${user} no existe`)
    
}

ArrayBDS.existeUser = existeUser
module.exports = ArrayBDS

    
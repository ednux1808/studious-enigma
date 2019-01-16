//const cakeUsers = require('../../modulesAPI/cakeUser.js')
//onst Bsql = require('../../modulesAPI/API/BNsql.js') 
import { indentificarUsuario } from '../../modulesAPI/cakeUser.js';

function validarDatos(){
    
    let userName = document.getElementById('user').value
    let passValue = document.getElementById('pass').value

    indentificarUsuario(userName,passValue)
        console.log(userName)
        console.log(passValue)
}
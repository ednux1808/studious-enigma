const cryptoApp = require('./API/crypto.js')
const BSD = require('./API/BNsql.js')
const fsApp = require('fs')


const CakeUser = {}

const  startApp = ()=>{
    fsApp.writeFile("./Data/"+"data-config.dll",cryptoApp.cryptoAdd('cbtagsdhªjdhgfj'), function (error){
        if(error){
            return console.log(error)
        }else{
            console.log('The file was saved!')
        }
    })
}

const indentificarUsuario = (username,pass) =>{
    let archivo = "./Data/"+"data-config.dll"
    fsApp.access(archivo, (err) => {
    
        let archivoBSD = ""
        let key ="ªesduCool"
    
        if (!err) {
            //Si existe el archivo entonces lo abro
          fsApp.readFile(archivo,'utf-8',(error,data) =>{
            if(error){
                return console.log(error)
            }else{
                archivoBSD = cryptoApp.desencryp(data)+key
                BSD.existeUser(archivoBSD,username,pass)
            }
        })
    
          return 1;
        }
        //Error file
    
        return 0
      })
    
    }


    const newUser = (username,pass) =>{
        let archivo = "./Data/data-config.dll"
        let key = cryptoApp.cryptoAdd('ª')
        let newDate = key+cryptoApp.cryptoAdd(username)+key+cryptoApp.cryptoAdd(pass)
        fsApp.appendFile(archivo, newDate, function (err) {
            if (err) {
              return console.log(err)
            } else {
              return console.log('User añadido con exito')
            }
          })
    }
      
    CakeUser.indentificarUsuario = indentificarUsuario
    CakeUser.startApp = startApp
    CakeUser.newUser = newUser
    module.exports = CakeUser
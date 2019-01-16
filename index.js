const express=require('express');
const app=express();

app.use(express.static(__dirname + '/public'));

const server=app.listen(8888, () => {
  console.log('Servidor web iniciado');
});




/*const {app, BrowserWindow } = require('electron');


console.dir(app);

app.on('before-quit', () => {
	console.log("saliedo...");
});



app.on('ready', () =>{
	let ventana = new BrowserWindow({
			width: 820,
		height: 527,
		title: 'Ednux App',
		center: true,
                maximizable: false,
                 hasShadow:true,
                opacity:0.99,
                titleBarStyle:'hidden'

	});

        ventana.on('closed',() =>{
		ventana = null;
		app.quit();
	});

	ventana.loadURL(`http://localhost:8888`);
        });
*/


/*fsApp.writeFile("./testUser.edx",cryptoApp.cryptoAdd('ednux1808'), function (error){
    if(error){
        return console.log(error)
    }else{
        console.log('The file was saved!')
    }
})

fsApp.readFile('./testUser.edx','utf-8',(error,data) =>{
    if(error){
        return console.log(error)
    }else{
        console.log(cryptoApp.desencryp(data))
    }
})*/
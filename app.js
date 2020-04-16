const lugar = require('./Lugar/lugar.js')
const clima = require('./Clima/clima.js')
 
const argv = require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Direccion de la ciudad para obtener el clima',
		demand: true
	}
}).argv


/*lugar.getLugarLatLng(argv.direccion)
.then(console.log)*/

/*clima.getClima(-5.710000, -79.279999)
.then(console.log)
.catch(console.log)*/

const getinfo = async(direccion) =>{
	try{
		const coord = await lugar.getLugarLatLng(direccion);
		const temp = await clima.getClima(coord.lat, coord.lng);
		return `El clima de ${coord.dir} es de ${temp}`
	}catch(e){
		return `No se pudo determinar el clima de ${direccion}`
	}
}

getinfo(argv.direccion)
.then(console.log)
.catch(console.log)
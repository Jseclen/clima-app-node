const axios = require('axios');

const getLugarLatLng = async(direccion) =>{
	
	const encodeUrl = encodeURI(direccion)

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
		headers: {
			'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
			'x-rapidapi-key': '25ca93fbf4msh1019bb5dc4e63bcp1b0591jsnd361891c761a'
		}
	});


	const resp = await instance.get();

	if(resp.data.Results.length === 0){
		throw new Error(`No hay direccion para ${encodeUrl}`)
	}

	const data = resp.data.Results[0]
	const dir = data.name
	const lat = data.lat
	const lng = data.lon

	return {
		dir,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}
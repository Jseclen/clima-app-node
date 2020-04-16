const axios = require('axios');

const getClima = async(lat, lng)=>{

	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=04b3c0f59c4133db4ab1348b810f9050&units=metric`)


	return resp.data.main.temp



}
module.exports = {
	getClima
}
const axios = require('axios');
const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c3e828b0be5fd67ae60e453ce5cbede9`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}
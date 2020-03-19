const axios = require('axios');

async function createUser(user) {
    return axios.post(`http://localhost:3001/users`, user);
}

module.exports = { createUser }
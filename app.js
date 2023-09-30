const express = require('express');

const app = express();

//route going to root
app.get('/', (req, res) => {
	res.send('Hello world');
});

//route going to /wazup
app.get('/wazup', (req, res) => {
	res.send('wazuppp');
});

app.listen(5000, () => {
	console.log('listening on port 5000');
});

// module.exports = server

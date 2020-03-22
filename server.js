const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 7070;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HTTP request logger(it consoles https requests)
app.use(morgan('tiny'));

app.use('/api', routes);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

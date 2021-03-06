const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


//db
mongoose.connect(
	process.env.MONGO_URI, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true
	})
	.then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
	console.log(`DB connection error: ${err.message}`);
});

mongoose.set('useFindAndModify', false);

//bring in routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(expressValidator());
app.use(cors());
app.use("/api", postRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use(function (err, req, res, next) {
	if (err.name == 'UnauthorizedError') {
		res.status(401).json({ error: 'Unauthorized!' });
	}
});

app.disable('etag');

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`A node js api is listening on port: ${port}`)
})
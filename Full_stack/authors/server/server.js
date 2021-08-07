const express = require('express')
const app = express();
const port = 8000; 
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require('./routs/auther.rout')(app)

app.listen(port, () => console.log('lestning on port 8000'))
const cors = require('cors') 
const express = require('express')
const app = express();
const port = 8000; 
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoos.config')
require('./routs/product.rout')(app)

app.listen(port, () => console.log('lestning on port 8000'))
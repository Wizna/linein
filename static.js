var express = require('express');
var app = express();
app.use(express.static(process.cwd()));
app.listen(3000);
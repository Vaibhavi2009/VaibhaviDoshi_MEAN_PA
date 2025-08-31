const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));  // <-- app/views

app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./app/routes/index.server.routes'); // <-- app/routes
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

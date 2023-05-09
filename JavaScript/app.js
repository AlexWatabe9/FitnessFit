const express = require('express');
const app = express();
const port = 3000;

app.engine('handlebars', require('express-handlebars')({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

const fitnessRouter = require('./routes/fitness');

// Use the fitness router for '/fitness' routes
app.use('/fitness', fitnessRouter);

// Set the home route
app.get('/', (req, res) => {
  res.redirect('/fitness');
});

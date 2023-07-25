
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const db = require('./models/db_connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());   
app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({ extended: true }));
  

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

// Sync the database and start the server
db.sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

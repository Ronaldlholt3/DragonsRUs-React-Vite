const express = require('express');
const mongoose = require('mongoose');
const potionRoutes = require('./routes/potions'); // Adjust path if needed
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use a different port than your React app

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING'; // **REPLACE THIS!**

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Backend connected to MongoDB'))
.catch(err => console.error('Backend error connecting to MongoDB:', err));

// Use the potion routes (mount them under the '/api' prefix)
app.use('/api', potionRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
require('dotenv').config();
console.log('⏳ MONGO_URI:', process.env.MONGO_URI);

const mongoose = require('mongoose');  // ✅ MISSING LINE
const app = require('./app');
console.log('🔍 typeof app:', typeof app);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

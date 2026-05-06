require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/engineers', require('./routes/engineers'));
app.use('/api/v1/appointments', require('./routes/appointments'));
app.use('/api/v1/payments', require('./routes/payments'));
app.use('/api/v1/reviews', require('./routes/reviews'));
app.use('/api/v1/reports', require('./routes/reports'));
app.use('/api/v1/admin', require('./routes/admin'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CEguradista backend running on port ${PORT}`);
});

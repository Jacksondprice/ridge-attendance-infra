const express = require('express');
const events = require('./routes/events');

const app = express();
app.use(express.json());
app.use('/api/events', events);
app.get('/health', (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`listening on ${port}`));

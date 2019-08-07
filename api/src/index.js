import express from 'express';

import bodyParser from 'body-parser';

import router from './routes/routes';

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

export default app;

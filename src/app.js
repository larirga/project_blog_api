const express = require('express');

// ...

const app = express();

const loginRouter = require('./routers/loginRouter');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use((error, _req, res, _next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
});
module.exports = app;

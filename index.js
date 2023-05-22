const express = require('express');
const bodyParser = require('body-parser');
const fuzzyLogic = require('./fuzzyLogic'); // Archivo con las funciones de lógica difusa

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para calcular la lógica difusa
app.post('/fuzzy', (req, res) => {
  const inputA = parseFloat(req.body.inputA);
  const inputB = parseFloat(req.body.inputB);

  // Realiza el cálculo de lógica difusa utilizando las funciones definidas en fuzzyLogic
  const result = fuzzyLogic.fuzzyCalculation(inputA, inputB);

  res.json({ result });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});

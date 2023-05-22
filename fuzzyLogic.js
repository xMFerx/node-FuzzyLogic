// fuzzyLogic.js

// Función para calcular el máximo de dos valores
function max(a, b) {
  return Math.max(a, b);
}

// Función para calcular el mínimo de dos valores
function min(a, b) {
  return Math.min(a, b);
}

// Función de pertenencia triangular
function triangular(x, a, b, c) {
  return max(0, min((x - a) / (b - a), (c - x) / (c - b)));
}

// Función de pertenencia trapezoidal
function trapezoidal

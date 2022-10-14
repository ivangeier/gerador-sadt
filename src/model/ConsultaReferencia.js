"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ConsultaReferencia = exports.ConsultaReferencia = function ConsultaReferencia(tipoDoenca, anosDoenca, mesesDoenca, diasDoenca) {
  _classCallCheck(this, ConsultaReferencia);

  this.tipoDoenca = tipoDoenca;
  this.anosDoenca = anosDoenca;
  this.mesesDoenca = mesesDoenca;
  this.diasDoenca = diasDoenca;
};
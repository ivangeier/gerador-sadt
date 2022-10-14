"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Atendimento = exports.Atendimento = function Atendimento(tipoAtendimento, indicacaoAcidente, tipoConsulta, tipoSaida, regime, ocupacional) {
  _classCallCheck(this, Atendimento);

  this.tipoAtendimento = tipoAtendimento;
  this.indicacaoAcidente = indicacaoAcidente;
  this.tipoConsulta = tipoConsulta;
  this.tipoSaida = tipoSaida;
  this.regime = regime;
  this.ocupacional = ocupacional;
};
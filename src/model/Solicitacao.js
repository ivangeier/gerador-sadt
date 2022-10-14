"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Solicitacao = exports.Solicitacao = function Solicitacao(dataHora, carater, cid10, indicacao, procedimentos) {
  _classCallCheck(this, Solicitacao);

  this.dataHora = dataHora;
  this.carater = carater;
  this.cid10 = cid10;
  this.indicacao = indicacao;
  this.procedimentos = procedimentos;
};
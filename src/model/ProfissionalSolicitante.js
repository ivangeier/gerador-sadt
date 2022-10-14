"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ProfissionalSolicitante = exports.ProfissionalSolicitante = function ProfissionalSolicitante(nome, conselho, numeroConselho, ufConselho, cbo) {
  _classCallCheck(this, ProfissionalSolicitante);

  this.nome = nome;
  this.conselho = conselho;
  this.numeroConselho = numeroConselho;
  this.ufConselho = ufConselho;
  this.cbo = cbo;
};
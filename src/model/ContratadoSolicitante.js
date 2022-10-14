"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ContratadoSolicitante = exports.ContratadoSolicitante = function ContratadoSolicitante(documentoSolicitante, nome, cnes, profissionalSolicitante) {
  _classCallCheck(this, ContratadoSolicitante);

  this.documentoSolicitante = documentoSolicitante;
  this.nome = nome;
  this.cnes = cnes;
  this.profissionalSolicitante = profissionalSolicitante;
};
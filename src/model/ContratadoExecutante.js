"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ContratadoExecutante = exports.ContratadoExecutante = function ContratadoExecutante(documentoExecutante, nome, endereco, cnes, documentoComplementar, nomeComplementar, conselho, conselhoNumero, conselhoUF, cbo, grauParticipacao) {
  _classCallCheck(this, ContratadoExecutante);

  this.documentoExecutante = documentoExecutante;
  this.nome = nome;
  this.endereco = endereco;
  this.cnes = cnes;
  this.documentoComplementar = documentoComplementar;
  this.nomeComplementar = nomeComplementar;
  this.conselho = conselho;
  this.conselhoNumero = conselhoNumero;
  this.conselhoUF = conselhoUF;
  this.cbo = cbo;
  this.grauParticipacao = grauParticipacao;
};
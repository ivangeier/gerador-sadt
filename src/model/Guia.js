"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Guia = exports.Guia = function Guia(autorizacao, beneficiario, contratadoSolicitante, solicitacao, contratadoExecutante, atendimento, consultaReferencia, procedimentosRealizados, opmSolicitados, opmRealizados) {
  _classCallCheck(this, Guia);

  this.autorizacao = autorizacao;
  this.beneficiario = beneficiario;
  this.contratadoSolicitante = contratadoSolicitante;
  this.solicitacao = solicitacao;
  this.contratadoExecutante = contratadoExecutante;
  this.atendimento = atendimento;
  this.consultaReferencia = consultaReferencia;
  this.procedimentosRealizados = procedimentosRealizados;
  this.opmSolicitados = opmSolicitados;
  this.opmRealizados = opmRealizados;
};
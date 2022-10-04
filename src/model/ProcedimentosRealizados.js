"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProcedimentosRealizados = exports.ProcedimentosRealizados = function ProcedimentosRealizados(procedimentos, observacao, totalProcedimentos, totalTaxasAlugueis, totalMateriais, totalMedicamentos, totalDiarias, totalGases, totalGuia) {
  _classCallCheck(this, ProcedimentosRealizados);

  this.procedimentos = procedimentos;
  this.observacao = observacao;
  this.totalProcedimentos = totalProcedimentos;
  this.totalTaxasAlugueis = totalTaxasAlugueis;
  this.totalMateriais = totalMateriais;
  this.totalMedicamentos = totalMedicamentos;
  this.totalDiarias = totalDiarias;
  this.totalGases = totalGases;
  this.totalGuia = totalGuia;
};
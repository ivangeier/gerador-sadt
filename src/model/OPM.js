"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OPM = exports.OPM = function OPM(codigoTabela, codigo, descricao, quantidade, fabricante, codigoDeBarras, valorUnitario, valorTotal, valorTotalOPM) {
  _classCallCheck(this, OPM);

  this.codigoTabela = codigoTabela;
  this.codigo = codigo;
  this.descricao = descricao;
  this.quantidade = quantidade;
  this.fabricante = fabricante;
  this.codigoDeBarras = codigoDeBarras;
  this.valorUnitario = valorUnitario;
  this.valorTotal = valorTotal;
  this.valorTotalOPM = valorTotalOPM;
};
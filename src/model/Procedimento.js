"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Procedimento = exports.Procedimento = function Procedimento(codigoTabela, codigo, nome, qtdSolicitada, qtdAutorizada, data, horaInicial, horaFinal, qtdRealizada, viaAcesso, tecnica, reducaoAcrescimoPct, valorUnitario, valorTotal) {
  _classCallCheck(this, Procedimento);

  this.codigoTabela = codigoTabela;
  this.codigo = codigo;
  this.nome = nome;
  this.qtdSolicitada = qtdSolicitada;
  this.qtdAutorizada = qtdAutorizada;
  this.data = data;
  this.horaInicial = horaInicial;
  this.horaFinal = horaFinal;
  this.qtdRealizada = qtdRealizada;
  this.viaAcesso = viaAcesso;
  this.tecnica = tecnica;
  this.reducaoAcrescimoPct = reducaoAcrescimoPct;
  this.valorUnitario = valorUnitario;
  this.valorTotal = valorTotal;
};
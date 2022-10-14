"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Autorizacao = exports.Autorizacao = function Autorizacao(registroANS, numeroGuia, numeroGuiaPrincipal, dataAutorizacao, senha, validadeSenha, dataEmissao, numeroGuiaOperadora) {
  _classCallCheck(this, Autorizacao);

  this.registroANS = registroANS;
  this.numeroGuia = numeroGuia;
  this.numeroGuiaPrincipal = numeroGuiaPrincipal;
  this.dataAutorizacao = dataAutorizacao;
  this.senha = senha;
  this.validadeSenha = validadeSenha;
  this.dataEmissao = dataEmissao;
  this.numeroGuiaOperadora = numeroGuiaOperadora;
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Convenio = exports.Convenio = function Convenio(numeroCarteira, validadeCarteira, nomeDoPlano, logotipo, nome) {
  _classCallCheck(this, Convenio);

  this.numeroCarteira = numeroCarteira;
  this.validadeCarteira = validadeCarteira;
  this.nomeDoPlano = nomeDoPlano;
  this.logotipo = logotipo;
  this.nome = nome;
};
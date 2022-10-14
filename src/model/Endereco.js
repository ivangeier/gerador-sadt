"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Endereco = exports.Endereco = function Endereco(tipoLogradouro, logradouro, numero, complemento, municipio, uf, codigoIbgeMunicipio, cep) {
  _classCallCheck(this, Endereco);

  this.tipoLogradouro = tipoLogradouro;
  this.logradouro = logradouro;
  this.numero = numero;
  this.complemento = complemento;
  this.municipio = municipio;
  this.uf = uf;
  this.codigoIbgeMunicipio = codigoIbgeMunicipio;
  this.cep = cep;
};
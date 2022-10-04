"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beneficiario = exports.Beneficiario = function Beneficiario(convenio, nome, numeroCartaoNacionalSaude, coParticipacao, recemNascido) {
  _classCallCheck(this, Beneficiario);

  this.convenio = convenio;
  this.nome = nome;
  this.numeroCartaoNacionalSaude = numeroCartaoNacionalSaude;
  this.coParticipacao = coParticipacao;
  this.recemNascido = recemNascido;
};
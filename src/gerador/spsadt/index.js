'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeradorGuiaSPSADT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GeradorDePdf = require('./GeradorDePdf');

var _GeradorDePdf2 = _interopRequireDefault(_GeradorDePdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeradorGuiaSPSADT = exports.GeradorGuiaSPSADT = function () {
  function GeradorGuiaSPSADT() {
    _classCallCheck(this, GeradorGuiaSPSADT);
  }

  _createClass(GeradorGuiaSPSADT, [{
    key: 'gerarPdf',
    value: function gerarPdf(guia) {
      return new _GeradorDePdf2.default(guia).gerar();
    }
  }]);

  return GeradorGuiaSPSADT;
}();
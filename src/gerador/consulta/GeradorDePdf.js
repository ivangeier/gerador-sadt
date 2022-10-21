'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _pdfkit = require('pdfkit');

var _pdfkit2 = _interopRequireDefault(_pdfkit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FONTES_DIR = _path2.default.join(__dirname, '../fontes');
var TIMES_NEW_ROMAN = _path2.default.join(FONTES_DIR, 'Times New Roman.ttf');
var TIMES_NEW_ROMAN_NEGRITO = _path2.default.join(FONTES_DIR, 'Times New Roman Bold.ttf');
var TIMES_NEW_ROMAN_ITALICO = _path2.default.join(FONTES_DIR, 'Times New Roman Italic.ttf');
var TIMES_NEW_ROMAN_NEGRITO_ITALICO = _path2.default.join(FONTES_DIR, 'Times New Roman Bold Italic.ttf');

var opcoes = {
  ajusteY: 0,
  ajusteX: 0,
  autor: '',
  titulo: 'GUIA DE CONSULTA',
  criador: '',
  tamanhoDaFonteDoTitulo: 6,
  tamanhoDaFonteDoCampo: 10,
  tamanhoDaFonteDoCampoMenor: 6,
  tamanhoDaFonteDaSecao: 5.5,
  tamanhoDaFonteTituloPrincipal: 10,
  tamanhoFonteNumeroGuia: 14,
  layout: 'landscape',
  corDoTitulo: 'black',
  alinhamentoDoTitulo: 'center',
  alinhamentoDoTituloDaTabela: 'center',
  corDaSecao: 'black',
  alinhamentoDoCampo: 'center',
  corDoCampo: 'black',
  tamanhoDaFonteDosItens: 7,
  separadorDeItens: true,
  ajusteYDoLogotipo: 0,
  ajusteYDaIdentificacaoDoEmitente: 0,
  corDoLayout: 'black',
  larguraDaPagina: 841.68,
  alturaDaPagina: 595.44,
  creditos: ''
};

var grossuraDaLinha = 0.5;
var margemTopo = 36;
var margemEsquerda = 36;
var margemDireita = 36;
var distanciaEntreCamposZerada = 0;
var distanciaEntreCampos = 4;
var alturaCampo = 24;
var alturaSecao = 10;
var larguraTitulo = 540;
var larguraCampo = 80;
var larguraCampoMuitoPequeno = 25;
var larguraCampoPequeno = 40;
var larguraCampoMedio = 90;
var larguraCampoMedioMaior = 110;
var larguraCampoGrande = 120;
var larguraCampoGrandeMedio = 150;
var larguraCampoMuitoGrande = 220;
var larguraCampoNome = 370;
var larguraCampoIndicacao = 535;
var cinza = '#dedede';

var GeradorDePdf = function () {
  function GeradorDePdf(guia) {
    _classCallCheck(this, GeradorDePdf);

    this.guia = guia;
  }

  _createClass(GeradorDePdf, [{
    key: 'gerar',
    value: function gerar() {
      var pdf = new _pdfkit2.default({
        bufferPages: true,
        margin: 0,
        layout: opcoes.layout,
        size: [opcoes.alturaDaPagina, opcoes.larguraDaPagina],
        info: {
          Author: opcoes.autor,
          Title: opcoes.titulo,
          Creator: opcoes.criador,
          Producer: opcoes.produzidoPor
        }
      });

      pdf.lineWidth(grossuraDaLinha);

      if (opcoes.stream) {
        pdf.pipe(opcoes.stream);
      }

      this.cadastrarFontes(pdf);

      var x = 0;
      var y = 0;

      this.logotipo(pdf, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.titulo(pdf, opcoes.titulo, x, y, larguraTitulo, opcoes.alinhamentoDoTitulo, opcoes.tamanhoDaFonteTituloPrincipal);
      x += larguraTitulo + distanciaEntreCampos;
      this.normal(pdf, '2 - Nº Guia no Prestador', x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoTitulo);
      y += 2 * distanciaEntreCampos;
      this.negrito(pdf, this.guia.autorizacao.numeroGuia, x, y, larguraCampoMuitoGrande, 'left', opcoes.tamanhoFonteNumeroGuia);

      x = 0;
      y = 40;

      this.campo(pdf, '1 - Registro ANS', this.guia.autorizacao.registroANS, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '3 - Número da Guia Atribuído pela Operadora', this.guia.autorizacao.numeroGuia, x, y, larguraCampoMuitoGrande);
      y += alturaCampo + distanciaEntreCampos;
      this.secao(pdf, y, 'Dados do Beneficiário');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '4 - Número da Carteira', this.guia.beneficiario.convenio.numeroCarteira, x, y, larguraCampoNome);
      x += larguraCampoNome + distanciaEntreCampos;
      this.campo(pdf, '5 - Validade da Carteira', this.guia.beneficiario.convenio.validadeCarteira, x, y, larguraCampoGrande);
      x += larguraCampoGrande + distanciaEntreCampos;
      this.campo(pdf, '6 - Atendimento a RN (Sim ou Não)', this.guia.beneficiario.recemNascido, x, y, larguraCampoGrande);
      y += alturaCampo + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '26 - Nome Social', this.guia.beneficiario.nome, x, y, larguraCampoNome + 60);
      y += alturaCampo + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '7 - Nome', this.guia.beneficiario.nome, x, y, larguraCampoNome + 60);
      x += larguraCampoNome + 60 + distanciaEntreCampos;

      y += alturaCampo + distanciaEntreCampos;
      this.secao(pdf, y, 'Dados do Contratado');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '9 - Código na Operadora', this.guia.contratadoSolicitante.documentoSolicitante, x, y, larguraCampoMuitoGrande);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      this.campo(pdf, '10 - Nome do Contratado', this.guia.contratadoSolicitante.nome, x, y, larguraCampoNome + 90);
      x += larguraCampoNome + 90 + distanciaEntreCampos;
      this.campo(pdf, '11 - Código CNES', this.guia.contratadoSolicitante.cnes, x, y, larguraCampo);
      y += alturaCampo + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '12 - Nome do Profissional Executante', this.guia.contratadoSolicitante.profissionalSolicitante.nome, x, y, larguraCampoNome + 100);
      x += larguraCampoNome + 100 + distanciaEntreCampos;
      this.campo(pdf, '13 - Conselho Profissional', this.guia.contratadoSolicitante.profissionalSolicitante.conselho, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '14 - Número do Conselho', this.guia.contratadoSolicitante.profissionalSolicitante.numeroConselho, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '15 - UF', this.guia.contratadoSolicitante.profissionalSolicitante.ufConselho, x, y, larguraCampoPequeno);
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.campo(pdf, '16 - Código CBO', this.guia.contratadoSolicitante.profissionalSolicitante.cbo, x, y, larguraCampo);

      y += alturaCampo + distanciaEntreCampos;
      this.secao(pdf, y, 'Dados do Atendimento / Procedimento Realizado');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '17 - Indicação de Acidente (acidente ou doença relacionada)', this.guia.atendimento.indicacaoAcidente, x, y, larguraCampoMuitoGrande);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      this.campo(pdf, '27 -  Indicador de Cobertura Especial', '|___|___|', x, y, larguraCampoGrandeMedio);
      x += larguraCampoGrandeMedio + distanciaEntreCampos;
      this.campo(pdf, '28 - Regime de Atendimento', this.guia.atendimento.regime, x, y, larguraCampoGrandeMedio);
      x += larguraCampoGrandeMedio + distanciaEntreCampos;
      this.campo(pdf, '29 - Saúde Ocupacional', this.guia.atendimento.ocupacional, x, y, larguraCampoGrandeMedio);

      y += alturaCampo + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '18 - Data do Atendimento', this.guia.procedimentosRealizados.procedimentos.data, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '19 - Tipo de Consulta', this.guia.atendimento.tipoConsulta, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '20 - Tabela', this.guia.procedimentosRealizados.procedimentos.codigoTabela, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '21 - Código do Procedimento', this.guia.procedimentosRealizados.procedimentos.codigo, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '22 - Valor do Procedimento',  this.guia.procedimentosRealizados.procedimentos.valorUnitario, x, y, larguraCampo);

      y += alturaCampo + distanciaEntreCampos;
      x = 0;

      this.retangulo(pdf, x, y, opcoes.larguraDaPagina - (margemEsquerda + margemDireita), 160, cinza);

      y += distanciaEntreCampos;
      x += distanciaEntreCampos;
      this.titulo(pdf, '23 - Observação / Justificativa', x, y, larguraCampoGrande, 'left');
      y += alturaCampo;
      this.valor(pdf, this.guia.procedimentosRealizados.observacao, x, y, 5 * (alturaCampo + 3 * distanciaEntreCampos), 'left', opcoes.tamanhoFonteDoCampoTabela);


      y += 160 - alturaCampo;
      x = 0;
      this.campo(pdf, '24 - Assinatura do Profissional Executante', '', x, y, larguraCampoMuitoGrande);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      this.campo(pdf, '25 - Asinatura do Beneficiário ou Responsável', '', x, y, larguraCampoMuitoGrande);

      var paginas = pdf.bufferedPageRange();

      for (var i = paginas.start; i < paginas.start + paginas.count; i++) {
        pdf.switchToPage(i);
      }

      pdf.flushPages();
      pdf.end();
      return pdf;
    }
  }, {
    key: 'cadastrarFontes',
    value: function cadastrarFontes(pdf) {
      pdf.registerFont('normal', TIMES_NEW_ROMAN);
      pdf.registerFont('negrito', TIMES_NEW_ROMAN_NEGRITO);
      pdf.registerFont('italico', TIMES_NEW_ROMAN_ITALICO);
      pdf.registerFont('negrito-italico', TIMES_NEW_ROMAN_NEGRITO_ITALICO);
    }
  }, {
    key: 'secao',
    value: function secao(pdf, y, titulo) {
      this.retangulo(pdf, 0, y, opcoes.larguraDaPagina - 72, alturaSecao, cinza);
      this.titulo(pdf, titulo, 2, y + 1, opcoes.larguraDaPagina - 72, 'left', opcoes.tamanhoDaFonteDoTitulo);
    }
  }, {
    key: 'retangulo',
    value: function retangulo(pdf, x, y, largura, altura, cor) {
      cor = cor || '#fff';
      pdf.rect(margemEsquerda + opcoes.ajusteX + x, margemTopo + opcoes.ajusteY + y, largura, altura).fillAndStroke(cor, '#030303');
    }
  }, {
    key: 'campo',
    value: function campo(pdf, titulo, valor, x, y, largura, cor, tamanhoTexto, larguraValor, legenda) {
      this.retangulo(pdf, x, y, largura, alturaCampo, cor);
      this.titulo(pdf, titulo, x + distanciaEntreCampos, y + distanciaEntreCampos, largura, 'left', opcoes.tamanhoDaFonteDoTitulo);
      this.valor(pdf, valor, x + 2, y + 12, largura - distanciaEntreCampos, 'left', tamanhoTexto);

      if (legenda && larguraValor) {
        this.valor(pdf, legenda, x + larguraValor, y + distanciaEntreCampos, largura - distanciaEntreCampos - larguraValor, 'left', opcoes.tamanhoDaFonteDoCampoMenor);
      }
    }
  }, {
    key: 'titulo',
    value: function titulo(pdf, string, x, y, largura, alinhamento, tamanho) {
      string = string || '';
      x = margemEsquerda + opcoes.ajusteX + x;
      y = margemTopo + opcoes.ajusteY + y;

      pdf.font('negrito').fillColor(opcoes.corDoTitulo).fontSize(tamanho || opcoes.tamanhoDaFonteDoTitulo).text(string, x, y, {
        width: largura,
        align: alinhamento || opcoes.alinhamentoDoTitulo
      });
    }
  }, {
    key: 'logotipo',
    value: function logotipo(pdf, x, y, largura) {
      var logotipo = this.guia.beneficiario.convenio.logotipo;
      x += 10 + opcoes.ajusteX;
      y += 10 + opcoes.ajusteY + opcoes.ajusteYDoLogotipo;

      if (logotipo) {
        pdf.image(logotipo, x, y, { fit: [largura, largura] });
      } else {
        this.negrito(pdf, this.guia.beneficiario.convenio.nome, x, y, largura, 'center', opcoes.tamanhoDaFonteDoCampo);
      }
    }
  }, {
    key: 'normal',
    value: function normal(pdf, string, x, y, largura, alinhamento, tamanho) {
      string = string || '';

      pdf.font('normal').fillColor(opcoes.corDoTitulo).fontSize(tamanho || 8).text(string, margemEsquerda + opcoes.ajusteX + x, margemTopo + opcoes.ajusteY + y, {
        width: largura,
        align: alinhamento || 'center',
        lineGap: -1.5
      });
    }
  }, {
    key: 'italico',
    value: function italico(pdf, string, x, y, largura, alinhamento, tamanho) {
      string = string || '';

      pdf.font('italico').fillColor(opcoes.corDoTitulo).fontSize(tamanho || 6).text(string, margemEsquerda + opcoes.ajusteX + x, margemTopo + opcoes.ajusteY + y, {
        width: largura,
        align: alinhamento || 'center',
        lineGap: -1.5
      });
    }
  }, {
    key: 'negrito',
    value: function negrito(pdf, string, x, y, largura, alinhamento, tamanho) {
      string = string || '';

      pdf.font('negrito').fillColor(opcoes.corDoTitulo).fontSize(tamanho || 6).text(string, margemEsquerda + opcoes.ajusteX + x, margemTopo + opcoes.ajusteY + y, {
        width: largura,
        align: alinhamento || 'center',
        lineGap: -1.5
      });
    }
  }, {
    key: 'valor',
    value: function valor(pdf, string, x, y, largura, alinhamento, tamanho) {
      string = string || '';

      pdf.font('normal').fillColor(opcoes.corDoCampo).fontSize(tamanho || opcoes.tamanhoDaFonteDoCampo).text(string, margemEsquerda + opcoes.ajusteX + x, margemTopo + opcoes.ajusteY + y, {
        width: largura,
        align: alinhamento || opcoes.alinhamentoDoCampo
      });
    }
  }]);

  return GeradorDePdf;
}();

exports.default = GeradorDePdf;
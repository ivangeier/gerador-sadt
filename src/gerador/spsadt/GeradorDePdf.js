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
  titulo: 'GUIA DE SERVIÇO PROFISSIONAL / SERVIÇO AUXILIAR DE DIAGNÓSTICO E TERAPIA - SP /SADT',
  criador: '',
  tamanhoDaFonteDoTitulo: 6,
  tamanhoDaFonteDoCampo: 8,
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
var margemTopo = 10;
var margemEsquerda = 10;
var margemDireita = 10;
var distanciaEntreCamposZerada = 0;
var distanciaEntreCampos = 2;
var alturaCampo = 22;
var alturaSecao = 8;
var larguraTitulo = 540;
var larguraCampo = 80;
var larguraCampoMuitoPequeno = 25;
var larguraCampoPequeno = 40;
var larguraCampoPequenoMedio = 60;
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
      var _this = this;

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
      x += larguraCampoPequenoMedio + distanciaEntreCampos;
      this.negrito(pdf, this.guia.autorizacao.numeroGuia, x, y, larguraCampoMuitoGrande, 'left', opcoes.tamanhoFonteNumeroGuia);

      x = 0;
      y = 20;

      this.campo(pdf, '1 - Registro ANS', this.guia.autorizacao.registroANS, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '3 - Nº Guia Principal', this.guia.autorizacao.numeroGuiaPrincipal, x, y, larguraCampoMuitoGrande);

      y += alturaCampo + distanciaEntreCampos;
      x =0;

      this.campo(pdf, '4 - Data da Autorização', this.guia.autorizacao.dataAutorizacao, x, y, larguraCampoMedio);
      x += larguraCampoMedio + distanciaEntreCampos;
      this.campo(pdf, '5 - Senha', this.guia.autorizacao.senha, x, y, larguraCampoMuitoGrande);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      this.campo(pdf, '6 - Data Validade da Senha', this.guia.autorizacao.validadeSenha, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '7 - Número da Guia Atribuido pela Operadora', this.guia.autorizacao.numeroGuiaOperadora, x, y, larguraCampoMuitoGrande);

      y += alturaCampo + distanciaEntreCampos;
      this.secao(pdf, y, 'Dados do Beneficiário');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '8 - Número da Carteira', this.guia.beneficiario.convenio.numeroCarteira, x, y, larguraCampoGrande);
      x += larguraCampoGrande + distanciaEntreCampos;
      this.campo(pdf, '9 - Valida da Carteira', this.guia.beneficiario.convenio.validadeCarteira, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '10 - Nome', this.guia.beneficiario.nome, x, y, larguraCampoNome);
      x += larguraCampoNome + distanciaEntreCampos;
      this.campo(pdf, '11 - Número do Cartão Nacional de Saúde', this.guia.beneficiario.numeroCartaoNacionalSaude, x, y, larguraCampoGrande);
      x += larguraCampoGrande + distanciaEntreCampos;
      this.campo(pdf, '12 - Atendimento RN', this.guia.beneficiario.recemNascido, x, y, larguraCampoMedio);

      y += alturaCampo + distanciaEntreCampos;
      this.secao(pdf, y, 'Dados do Contratado Solicitante');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;

      this.campo(pdf, '13 - Código na Operadora', this.guia.contratadoSolicitante.documentoSolicitante, x, y, larguraCampoGrandeMedio);
      x += larguraCampoGrandeMedio + distanciaEntreCampos;
      this.campo(pdf, '14 - Nome do Contratado', this.guia.contratadoSolicitante.nome, x, y, larguraCampoIndicacao);
      
      y += alturaCampo + distanciaEntreCampos;
      x = 0;


      this.campo(pdf, '15 - Nome do Profissional Solicitante', this.guia.contratadoSolicitante.profissionalSolicitante.nome, x, y, larguraCampoNome);
      x += larguraCampoNome + distanciaEntreCampos;
      this.campo(pdf, '16 - Conselho Profissional', this.guia.contratadoSolicitante.profissionalSolicitante.conselho, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '17 - Número do Conselho', this.guia.contratadoSolicitante.profissionalSolicitante.numeroConselho, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '18 - UF', this.guia.contratadoSolicitante.profissionalSolicitante.ufConselho, x, y, larguraCampoPequeno);
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.campo(pdf, '19 - Código CBO', this.guia.contratadoSolicitante.profissionalSolicitante.cbo, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '20 - Assinatura do Profissional Solicitante', '', x, y, larguraCampoGrandeMedio);

      y += alturaCampo + distanciaEntreCampos;
      this.secao(pdf, y, 'Dados da Solicitaçãp / Procedimentos ou Itens Assistenciais Solicitados');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '21 - Caráter do Atendimento', '', x, y, larguraCampoGrande);
      x += larguraCampoGrande + distanciaEntreCampos;
      this.campo(pdf, '22 - Data da Solicitação', '|___|___|/|___|___|/|___|___|___|___|', x, y, larguraCampoGrandeMedio);
      x += larguraCampoGrandeMedio + distanciaEntreCampos;
      this.campo(pdf, '23 - Indicação clínica', this.guia.solicitacao.indicacao, x, y, larguraCampoIndicacao);

      y += alturaCampo + distanciaEntreCampos;
      x = 0;

      largura = 158;
      altura = 10;

      this.retangulo(pdf, x, y, 5 * (largura + 3 * distanciaEntreCampos), 4 * (altura + 3 * distanciaEntreCampos));

      x += distanciaEntreCampos;
      y += distanciaEntreCampos;

      this.titulo(pdf, '24 - Tabela', x, y, larguraCampoPequeno, 'left');
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '25 - Código do Procedimento', x, y, larguraCampoGrandeMedio, 'left');
      x += larguraCampoGrandeMedio + distanciaEntreCampos;
      this.titulo(pdf, '26 - Descrição', x, y, larguraCampoNome + 100, 'left');
      x += larguraCampoNome + 100 + distanciaEntreCampos;
      this.titulo(pdf, '27 - Quatidade Solicitada', x, y, larguraCampo, 'left');
      x += larguraCampo + distanciaEntreCampos;
      this.titulo(pdf, '28 - Quatidade Autorizada', x, y, larguraCampo, 'left');

      for (let index = 0; index < 5; index++) {
        y += alturaSecao + distanciaEntreCampos;
        x = distanciaEntreCampos;
        _this.valor(pdf, '|___|___|', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequeno + distanciaEntreCampos;
        _this.valor(pdf, '|___|___|___|___|___|___|___|___|___|___|', x, y, larguraCampoGrandeMedio, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoGrandeMedio + distanciaEntreCampos;
        _this.valor(pdf, '________________________________________________________________________________________________________________', x, y, larguraCampoNome + 100, 'left', opcoes.larguraCampoGrande);
        x += larguraCampoNome + 100 + distanciaEntreCampos;
        _this.valor(pdf, '|___|___|___|', x, y, larguraCampo, 'left', opcoes.larguraCampoPequeno);
        x += larguraCampo + distanciaEntreCampos;
        _this.valor(pdf, '|___|___|___|', x, y, larguraCampo, 'left', opcoes.larguraCampoPequeno);
      }

      // this.guia.solicitacao.procedimentos.forEach(function (p) {
      //   y += alturaSecao + distanciaEntreCampos;
      //   x = distanciaEntreCampos;
      //   _this.valor(pdf, p.codigoTabela, x, y, larguraCampoGrandeMedio, 'left', opcoes.tamanhoDaFonteDoCampo);
      //   x += larguraCampoGrandeMedio + distanciaEntreCampos;
      //   _this.valor(pdf, p.codigo, x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoCampo);
      //   x += larguraCampo + 10 * distanciaEntreCampos;
      //   _this.valor(pdf, p.nome.substring(0, 40), x, y, larguraCampoMuitoGrande, 'left', opcoes.larguraCampoGrande);
      //   x += larguraCampoMuitoGrande + distanciaEntreCampos;
      //   _this.valor(pdf, p.qtdSolicitada, x, y, larguraCampo, 'left', opcoes.larguraCampoPequeno);
      //   x += larguraCampo + distanciaEntreCampos;
      //   _this.valor(pdf, p.qtdAutorizada, x, y, larguraCampo, 'left', opcoes.larguraCampoPequeno);
      // });

      y += (altura + 2 * distanciaEntreCampos);
      x = 0;

      this.secao(pdf, y, 'Dados do Contratado Executante');
      y += alturaSecao + distanciaEntreCampos;
      this.campo(pdf, '29 - Código na Operadora', this.guia.contratadoExecutante.documentoExecutante, x, y, 160);
      x += 160 + distanciaEntreCampos;
      this.campo(pdf, '30 - Nome do Contratado', this.guia.contratadoExecutante.nome, x, y, larguraCampoIndicacao);
      x += larguraCampoIndicacao + distanciaEntreCampos;
      this.campo(pdf, '31 - Código CNES', this.guia.contratadoExecutante.cnes, x, y, 110);

      y += alturaCampo + distanciaEntreCampos;
      x = 0;

      this.secao(pdf, y, 'Dados do Atendimento');
      y += alturaSecao + distanciaEntreCampos;
      this.campo(pdf, '32 - Tipo Atendimento', this.guia.atendimento.tipoAtendimento, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '33 - Indicação de Acidente (acidente ou doença realacionada)', this.guia.atendimento.indicacaoAcidente, x, y, larguraCampoMuitoGrande);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      this.campo(pdf, '34 - Tipo de Consulta', this.guia.atendimento.tipoConsulta, x, y, larguraCampo);
      x += larguraCampo + distanciaEntreCampos;
      this.campo(pdf, '35 - Motivo de Encerramento do Atendimento', this.guia.atendimento.tipoSaida, x, y, larguraCampoGrandeMedio);

      y += alturaCampo + distanciaEntreCampos;
      x = 0;
      
      this.secao(pdf, y, 'Dados da Execução / Procedimentos e Exames Realizados');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;

      this.retangulo(pdf, x, y, 5 * (largura + 3 * distanciaEntreCampos), 4 * (altura + 3 * distanciaEntreCampos));

      x = distanciaEntreCampos;
      y += distanciaEntreCampos;

      this.titulo(pdf, '36-Data', x, y, larguraCampoPequeno, 'left');
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '37-Hora Inicial', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '', x, y, 10, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += 10 + distanciaEntreCampos;
      this.titulo(pdf, '38-Hora Final', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '39-Tabela', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '40-Código Procedimento', x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampo + distanciaEntreCampos;
      this.titulo(pdf, '41-Descrição', x, y, 280, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += 280 + distanciaEntreCampos;
      this.titulo(pdf, '42-Qtde.', x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoMuitoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '43-Via', x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoMuitoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '44-Tec.', x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoMuitoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '45 Fator Red./Acresc.', x, y, larguraCampoPequenoMedio, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoPequenoMedio + distanciaEntreCampos;
      this.titulo(pdf, '46-Valor Unitário (R$)', x, y, larguraCampoPequenoMedio, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoPequenoMedio + distanciaEntreCampos;
      this.titulo(pdf, '47-Valor Total (R$)', x + 2, y, larguraCampoPequenoMedio, 'left', opcoes.tamanhoDaFonteDoTitulo);

      this.guia.procedimentosRealizados.procedimentos.forEach(function (p) {
        y += alturaSecao + distanciaEntreCampos;
        x = distanciaEntreCampos;
        _this.valor(pdf, p.data, x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequeno + distanciaEntreCampos;
        _this.valor(pdf, p.horaInicial, x, y, larguraCampoPequeno, 'center', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequeno + distanciaEntreCampos;
        _this.valor(pdf, 'a', x, y, 10, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += 10 + distanciaEntreCampos;
        _this.valor(pdf, p.horaFinal, x, y, larguraCampoPequeno, 'center', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequeno + distanciaEntreCampos;
        _this.valor(pdf, p.codigoTabela, x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequeno + distanciaEntreCampos;
        _this.valor(pdf, p.codigo, x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampo + distanciaEntreCampos;
        _this.valor(pdf, p.nome.substring(0, 80), x, y, 280, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += 280 + distanciaEntreCampos;
        _this.valor(pdf, p.qtdRealizada, x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoMuitoPequeno + distanciaEntreCampos;
        _this.valor(pdf, p.viaAcesso, x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoMuitoPequeno + distanciaEntreCampos;
        _this.valor(pdf, p.tecnica, x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoMuitoPequeno + distanciaEntreCampos;
        _this.valor(pdf, p.reducaoAcrescimoPct, x, y, larguraCampoPequenoMedio, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequenoMedio + distanciaEntreCampos;
        _this.valor(pdf, p.valorUnitario + ',00', x, y, larguraCampoPequenoMedio, 'left', opcoes.tamanhoDaFonteDoCampo);
        x += larguraCampoPequenoMedio + distanciaEntreCampos;
        _this.valor(pdf, p.valorTotal + ',00', x, y, larguraCampoPequenoMedio, 'left', opcoes.tamanhoDaFonteDoCampo);
      });

      y += (5 - this.guia.procedimentosRealizados.procedimentos.length) * (alturaSecao + distanciaEntreCampos);
      y += alturaSecao + 3 * distanciaEntreCampos;
      x = 0;

      // ---------------------------------------------------------------

      this.secao(pdf, y, 'Identificação do(s) Profissional(is) Executante(s)');
      y += alturaSecao + distanciaEntreCampos;
      x = 0;

      this.retangulo(pdf, x, y, 5 * (largura + 3 * distanciaEntreCampos), 4 * (altura + 1.5 * distanciaEntreCampos));

      x = distanciaEntreCampos;
      y += distanciaEntreCampos;

      this.titulo(pdf, '48-Seq.Ref', x, y, larguraCampoPequeno, 'left');
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '49-Grau Part.', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '50-Código na Operadora/CPF', x, y, 200, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += 200 + distanciaEntreCampos;
      this.titulo(pdf, '51-Nome do Profissional', x, y, 170, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += 170 + distanciaEntreCampos;
      this.titulo(pdf, '52-Conselho Profissional', x, y, 50, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += 50 + distanciaEntreCampos;
      this.titulo(pdf, '53-Número do Conselho', x, y, larguraCampoMuitoGrande, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      this.titulo(pdf, '54-UF', x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoTitulo);
      x += larguraCampoMuitoPequeno + distanciaEntreCampos;
      this.titulo(pdf, '55-Código CBO', x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoTitulo);

      y += alturaSecao + distanciaEntreCampos;
      x = distanciaEntreCampos;
      _this.valor(pdf, '01', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.grauParticipacao, x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.documentoComplementar, x, y, 200, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += 200 + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.nomeComplementar, x, y, 170, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += 170 + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.conselho, x, y, 50, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += 50 + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.conselhoNumero, x, y, larguraCampoMuitoGrande, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.conselhoUF, x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoMuitoPequeno + distanciaEntreCampos;
      _this.valor(pdf, this.guia.contratadoExecutante.cbo, x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoCampo);

      const qtd = this.guia.contratadoExecutante.cbo != null ? 3 : 4;

      for (i= 0; i < 3; i++) {
      y += alturaSecao + distanciaEntreCampos;
      x = distanciaEntreCampos;
      _this.valor(pdf, '|___|___|', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      _this.valor(pdf, '|___|___|', x, y, larguraCampoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoPequeno + distanciaEntreCampos;
      _this.valor(pdf, '|___|___|___|___|___|___|___|___|___|___|___|___|___|___|', x, y, 200, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += 200 + distanciaEntreCampos;
      _this.valor(pdf, '________________________________________', x, y, 170, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += 170 + distanciaEntreCampos;
      _this.valor(pdf, '|___|___|___|', x, y, 50, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += 50 + distanciaEntreCampos;
      _this.valor(pdf, '|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|', x, y, larguraCampoMuitoGrande, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoMuitoGrande + distanciaEntreCampos;
      _this.valor(pdf, '_____', x, y, larguraCampoMuitoPequeno, 'left', opcoes.tamanhoDaFonteDoCampo);
      x += larguraCampoMuitoPequeno + distanciaEntreCampos;
      _this.valor(pdf, '__________', x, y, larguraCampo, 'left', opcoes.tamanhoDaFonteDoCampo);
      }


      y += 4 + (4 * distanciaEntreCampos);
      x = 0;

      //----------------------------------------------------------------

      var largura = 158;
      var altura = 10;

      this.retangulo(pdf, x, y, 5 * (largura + 3 * distanciaEntreCampos), 2 * (altura + 3 * distanciaEntreCampos));

      x += distanciaEntreCampos;
      this.titulo(pdf, '56 - Data e Assinatura de Procedimentos em Série 57-Assinatura do Beneficiário ou Responsável', x, y, larguraCampoNome, 'left');

      y += altura;
      this.titulo(pdf, '1 -   |____|____|____|   ________________________________', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '3 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '5 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '7 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '9 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');

      y += altura + distanciaEntreCampos;
      x = distanciaEntreCampos;
      this.titulo(pdf, '2 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '4 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '6 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '8 -   |____|____|____|   ________________________________ ', x, y, largura, 'left');
      x += largura + distanciaEntreCampos;
      this.titulo(pdf, '10 -  |____|____|____|   ________________________________ ', x, y, largura, 'left');

      y += altura + distanciaEntreCampos;
      x = 0;

      this.retangulo(pdf, x, y, 5 * (largura + 3 * distanciaEntreCampos), 2 * (altura + 3 * distanciaEntreCampos), cinza);

      x += distanciaEntreCampos;
      this.titulo(pdf, '58 - Ovservação / Justificativa', x, y, largura, 'left');
      y += altura;
      this.valor(pdf, this.guia.procedimentosRealizados.observacao, x, y, 5 * (largura + 3 * distanciaEntreCampos), 'left');

      largura = (opcoes.larguraDaPagina - margemEsquerda - margemDireita - 7 * distanciaEntreCampos) / 7;

      x = 0;
      y += alturaCampo + distanciaEntreCampos;
      this.campo(pdf, '59 - Total Procedimentos (R$)', this.guia.procedimentosRealizados.totalProcedimentos + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '60 - Total Taxas e Aluguéis (R$)', this.guia.procedimentosRealizados.totalTaxasAlugueis + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '61 - Total Materiais (R$)', this.guia.procedimentosRealizados.totalMateriais + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '62 - Total de OPME (R$)', this.guia.procedimentosRealizados.totalMedicamentos + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '63 - Total Medicamentos (R$)', this.guia.procedimentosRealizados.totalDiarias + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '64 - Total Gases Medicinais (R$)', this.guia.procedimentosRealizados.totalGases + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '65 - Total Geral da Guia (R$)', this.guia.procedimentosRealizados.totalGuia + ',00', x, y, largura);
      x += largura + distanciaEntreCampos;

      largura = (opcoes.larguraDaPagina - margemEsquerda - margemDireita - 4 * distanciaEntreCampos) / 4;
      y += alturaCampo + distanciaEntreCampos;
      x = 0;
      this.campo(pdf, '66 - Assinatura do Responsável pela Autorização', '|____| / |____| / |____|  _______________________________', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '67 - Assinatura do Beneficiário ou Responsável', '|____| / |____| / |____|  _______________________________', x, y, largura);
      x += largura + distanciaEntreCampos;
      this.campo(pdf, '68 - Assinatura do Contratado', '|____| / |____| / |____|  _____________________________', x, y, largura);
      x += largura + distanciaEntreCampos;

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
      this.retangulo(pdf, 0, y, opcoes.larguraDaPagina - 20, alturaSecao, cinza);
      this.titulo(pdf, titulo, 2, y + 1, opcoes.larguraDaPagina - 20, 'left', opcoes.tamanhoDaFonteDoTitulo);
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
      this.valor(pdf, valor, x, y + 12, largura - distanciaEntreCampos, 'right', tamanhoTexto);

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
      x += margemEsquerda + opcoes.ajusteX;
      y += margemTopo + opcoes.ajusteY + opcoes.ajusteYDoLogotipo;

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
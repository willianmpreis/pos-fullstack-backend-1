// importação da classe que gerencia as oficinas na memória
const oficinas = require("../model/oficinaMemoria.js");

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function (req, res) {
  contexto = {
    titulo_pagina: "Catálogo de Oficinas",
    menu_inicio: true,
    resumo: await oficinas.resumo(),
    filtro_abertas: false,
    oficinas: await oficinas.lista(),
  };
  // renderiza o arquivo index.hbs, dentro da pasta view
  res.render("index", contexto);
};

// função responsável pela tela principal apenas com as inscrições abertas
exports.inscricoes_abertas = async function (req, res) {
  var resumo = await oficinas.resumo();
  var abertas = await oficinas.lista_abertas();
  contexto = {
    titulo_pagina: "Catálogo de Oficinas",
    menu_inicio: true,
    resumo: resumo,
    filtro_abertas: true,
    oficinas: abertas,
    nenhuma_aberta: resumo.total > 0 && abertas.length === 0,
  };
  // renderiza o arquivo dentro da pasta view
  res.render("index", contexto);
};

exports.sobre = async function (req, res) {
  contexto = {
    titulo_pagina: "Sobre",
    menu_sobre: true,
  };
  // renderiza o arquivo dentro da pasta view
  res.render("sobre", contexto);
};

// função responsável por exibir o formulário de pesquisa (GET)
exports.pesquisa_get = async function (req, res) {
  contexto = {
    titulo_pagina: "Pesquisa de Oficinas",
    menu_pesquisa: true,
    pesquisou: false,
  };
  // renderiza o arquivo dentro da pasta view
  res.render("pesquisa", contexto);
};

// função responsável por receber o termo do formulário e exibir o resultado
exports.pesquisa_post = async function (req, res) {
  var termo = req.body.termo;
  var resultado = await oficinas.pesquisa(termo);
  contexto = {
    titulo_pagina: "Pesquisa de Oficinas",
    menu_pesquisa: true,
    pesquisou: true,
    termo: termo,
    oficinas: resultado,
    sem_resultado: resultado.length === 0,
  };
  // renderiza o arquivo dentro da pasta view
  res.render("pesquisa", contexto);
};

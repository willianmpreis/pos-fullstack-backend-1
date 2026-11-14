// importação da classe que gerencia as oficinas na memória
const oficinas = require("../model/oficinaMemoria.js");
// importação do pacote que cria erros HTTP (usado no app.js)
//uso recomendado para evitar queda do servidor
const createError = require("http-errors");

// função responsável por exibir o formulário de cadastro (GET)
exports.cria_get = async function (req, res) {
  contexto = {
    titulo_pagina: "Nova Oficina",
    menu_nova: true,
  };
  // renderiza o arquivo dentro da pasta view
  res.render("criaOficina", contexto);
};

// função responsável por receber os dados do formulário de cadastro (POST)
exports.cria_post = async function (req, res) {
  var titulo = req.body.titulo;
  var responsavel = req.body.responsavel;
  var descricao = req.body.descricao;
  var carga_horaria = req.body.carga_horaria;

  await oficinas.cria(titulo, responsavel, descricao, carga_horaria);

  // redireciona para a página principal
  res.redirect("/");
};

// função responsável pela consulta a uma oficina
exports.consulta = async function (req, res, next) {
  try {
    var id = req.params.id_oficina;
    var oficina = await oficinas.consulta(id);

    //Para incluir a opção de voltar na pagina de consulta
    var voltar = "/";
    var origem = req.get("Referer");
    if (origem) {
      var caminho = new URL(origem).pathname;
      // se veio da edição (Cancelar), volta para a principal para não repetir a edição
      if (!caminho.startsWith("/oficina/altera")) voltar = caminho;
    }

    contexto = {
      titulo_pagina: "Consulta de Oficina",
      voltar: voltar,
      id: oficina.id,
      titulo: oficina.titulo,
      responsavel: oficina.responsavel,
      descricao: oficina.descricao,
      carga_horaria: oficina.carga_horaria,
      inscricoes_abertas: oficina.inscricoes_abertas,
    };
    // renderiza o arquivo dentro da pasta view
    res.render("consultaOficina", contexto);
  } catch (erro) {
    // oficina não localizada: encaminha para o tratamento de erro do app.js
    next(createError(404, erro.message, { registro: true }));
  }
};

// função responsável por exibir o formulário de edição (GET)
exports.altera_get = async function (req, res, next) {
  try {
    var id = req.params.id_oficina;
    var oficina = await oficinas.consulta(id);

    contexto = {
      titulo_pagina: "Editar Oficina",
      id: oficina.id,
      titulo: oficina.titulo,
      responsavel: oficina.responsavel,
      descricao: oficina.descricao,
      carga_horaria: oficina.carga_horaria,
    };
    // renderiza o arquivo dentro da pasta view
    res.render("alteraOficina", contexto);
  } catch (erro) {
    next(createError(404, "Oficina com o ID " + req.params.id_oficina + " não existe", { registro: true }));
  }
};

// função responsável por receber os dados do formulário de edição (POST)
exports.altera_post = async function (req, res, next) {
  try {
    var id = req.params.id_oficina;

    var titulo = req.body.titulo;
    var responsavel = req.body.responsavel;
    var descricao = req.body.descricao;
    var carga_horaria = req.body.carga_horaria;

    await oficinas.atualiza(id, titulo, responsavel, descricao, carga_horaria);

    // redireciona para a página principal
    res.redirect("/");
  } catch (erro) {
    next(createError(404, "Oficina com o ID " + req.params.id_oficina + " não existe", { registro: true }));
  }
};

// função responsável pela exclusão da oficina (após a confirmação na janela modal)
exports.deleta = async function (req, res, next) {
  try {
    var id = req.params.id_oficina;
    await oficinas.deleta(id);
    // redireciona para a página principal
    res.redirect("/");
  } catch (erro) {
    next(createError(404, erro.message, { registro: true }));
  }
};

// função responsável por alternar a situação das inscrições (aberta/encerrada)
exports.alterna = async function (req, res, next) {
  try {
    var id = req.params.id_oficina;
    await oficinas.alterna_situacao(id);
    // redireciona para a página principal
    res.redirect("/");
  } catch (erro) {
    next(createError(404, erro.message, { registro: true }));
  }
};

var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js')

/* GET home page. */
router.get('/', controllerIndex.tela_principal);

/* GET página principal apenas com as inscrições abertas */
router.get('/abertas', controllerIndex.inscricoes_abertas);

/* GET página sobre */
router.get('/sobre', controllerIndex.sobre);

/* GET pesquisa - formulário */
router.get('/pesquisa', controllerIndex.pesquisa_get);

/* POST pesquisa - recebe o termo e exibe o resultado */
router.post('/pesquisa', controllerIndex.pesquisa_post);

module.exports = router;
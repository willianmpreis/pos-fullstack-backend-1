var express = require('express');
var router = express.Router();
var controllerOficina = require('../controller/controllerOficina.js')

/* GET Cria Oficina - formulário */
router.get('/cria', controllerOficina.cria_get);

/* POST Cria Oficina - recebe os dados do formulário */
router.post('/cria', controllerOficina.cria_post);

/* GET Consulta Oficina */
router.get('/consulta/:id_oficina', controllerOficina.consulta);

/* GET Altera Oficina - formulário */
router.get('/altera/:id_oficina', controllerOficina.altera_get);

/* POST Altera Oficina - recebe os dados do formulário */
router.post('/altera/:id_oficina', controllerOficina.altera_post);

/* GET Exclui Oficina */
router.get('/deleta/:id_oficina', controllerOficina.deleta);

/* GET Alterna a situação das inscrições (aberta/encerrada) */
router.get('/alterna/:id_oficina', controllerOficina.alterna);

module.exports = router;

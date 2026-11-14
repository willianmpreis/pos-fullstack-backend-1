// importação da classe Oficina no arquivo "modelos.js"
var Oficina = require("./modelos.js");
const lista_oficinas = []; //será um vetor de objetos do tipo Oficina
let proximo_id = 1; //controle do próximo ID numérico, gerado pela aplicação

class OficinaMemoria {
  async cria(titulo, responsavel, descricao, carga_horaria) {
    const id = proximo_id++;
    lista_oficinas[id] = new Oficina(
      id,
      titulo,
      responsavel,
      descricao,
      parseInt(carga_horaria),
      true,
    );
    return lista_oficinas[id];
  }
  
  async atualiza(id, titulo, responsavel, descricao, carga_horaria) {
    lista_oficinas[id] = new Oficina(
      lista_oficinas[id].id,
      titulo,
      responsavel,
      descricao,
      parseInt(carga_horaria),
      lista_oficinas[id].inscricoes_abertas,
    );
    return lista_oficinas[id];
  }
  
  async alterna_situacao(id) {
    if (lista_oficinas[id]) {
      // atualiza somente a situação das inscrições (aberta <-> encerrada)
      lista_oficinas[id].inscricoes_abertas =
        !lista_oficinas[id].inscricoes_abertas;
      return lista_oficinas[id];
    } else throw new Error(`Oficina com o ID ${id} não existe`);
  }

  async consulta(id) {
    if (lista_oficinas[id]) return lista_oficinas[id];
    else throw new Error(`Oficina com o ID ${id} não existe`);
  }

  async deleta(id) {
    if (lista_oficinas[id]) {
      delete lista_oficinas[id];
    } else throw new Error(`Oficina com o ID ${id} não existe`);
  }

  async lista() {
    return Object.values(lista_oficinas);
  }

  async lista_abertas() {
    // somente as oficinas com inscrições abertas
    return Object.values(lista_oficinas).filter(
      (oficina) => oficina.inscricoes_abertas,
    );
  }

  async pesquisa(termo) {
    // lista as oficinas cujo título contém o termo
    const termo_minusculo = termo.trim().toLowerCase();
    return Object.values(lista_oficinas).filter((oficina) =>
      oficina.titulo.toLowerCase().includes(termo_minusculo),
    );
  }

  async resumo() {
    const oficinas = Object.values(lista_oficinas);
    const abertas = oficinas.filter((oficina) => oficina.inscricoes_abertas);
    return {
      total: oficinas.length,
      abertas: abertas.length,
      encerradas: oficinas.length - abertas.length,
      carga_horaria_abertas: abertas.reduce(
        (soma, oficina) => soma + oficina.carga_horaria,
        0,
      ),
    };
  }
}
// cria um objeto do tipo OficinaMemoria que será utilizado para gerenciar as oficinas
var oficinas = new OficinaMemoria();
module.exports = oficinas;

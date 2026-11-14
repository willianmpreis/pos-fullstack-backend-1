// Neste arquivo serão definidos todos os modelos de dados da aplicação
class Oficina {
  constructor(id, titulo, responsavel, descricao, carga_horaria, inscricoes_abertas) {
    this._id = id;
    this._titulo = titulo;
    this._responsavel = responsavel;
    this._descricao = descricao;
    this._carga_horaria = carga_horaria;
    this._inscricoes_abertas = inscricoes_abertas;
  }
  get id() {
    return this._id;
  }
  get titulo() {
    return this._titulo;
  }
  get responsavel() {
    return this._responsavel;
  }
  get descricao() {
    return this._descricao;
  }
  get carga_horaria() {
    return this._carga_horaria;
  }
  get inscricoes_abertas() {
    return this._inscricoes_abertas;
  }
  set titulo(novoTitulo) {
    this._titulo = novoTitulo;
  }
  set responsavel(novoResponsavel) {
    this._responsavel = novoResponsavel;
  }
  set descricao(novaDescricao) {
    this._descricao = novaDescricao;
  }
  set carga_horaria(novaCargaHoraria) {
    this._carga_horaria = novaCargaHoraria;
  }
  set inscricoes_abertas(novaSituacao) {
    this._inscricoes_abertas = novaSituacao;
  }
}
module.exports = Oficina;

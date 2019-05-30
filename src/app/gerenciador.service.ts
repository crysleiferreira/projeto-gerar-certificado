import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {
  listaEvento = [];
  id = 0;
  resultado = [
    {
    "cidade":'Palmas',
    "nome":'Cryslei',
    "cpf":1020304050,
    "rg":'123-sspto',
    "email":'ti@crea-to',
    "telefone":23434324343,
    "endereço":'Quadra 112 sul, Rua SR 01, Lote 01',
    "registroCrea": '11111-DTO',
    "formacao": 'Superior',
    "modalidade ":'Civil'
    },
    {
    "cidade":'jsdf',
    "nome":'antonio',
    "cpf":123456789,
    "rg":'123-sspto',
    "email":'ti@crea-to',
    "telefone":23434324343,
    "endereco":'Quadra 112 sul, Rua SR 01, Lote 01',
    "registroCrea": '11111-DTO',
    "formacao": 'Superior',
    "modalidade":'Civil'
  },
  ];
  constructor() {}

  

  cadastrarEvento(nome,datainicial,datafinal,local,nomepalestrante,horas) {
    let pessoa = {
      'id' : this.id++,
      'nome': nome,
      'datainicial': datainicial,
      'datafinal': datafinal,
      'local':local,
      'nomepalestrante': nomepalestrante,
      'horas': horas
    };
    this.listaEvento.push(pessoa); 
  };
  eventos(){
    return this.listaEvento;
  };
  pesquisarNome(usuario){
    let nome = null;
    nome = this.listaEvento.filter(item =>  item.horas === usuario.horas);
    return nome;
  };
}

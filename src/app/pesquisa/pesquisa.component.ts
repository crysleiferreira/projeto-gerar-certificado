import { Component, OnInit } from '@angular/core';
import { GerenciadorService } from '../gerenciador.service';
@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  tela = 'oculta';
  procurar = null;
  resposta = null;
  
  constructor(private service: GerenciadorService) {}

  pesquisar(){
    for (let p of this.service.resultado){
      if (p.cpf === this.procurar){
        this.resposta = p;
        this.tela = "apresenta";
        return  this.resposta;
      }  
    };
    return  this.resposta = null;
  }
  // pesquisar(){
    
  //   this.resultado = this.service.listaEvento.filter(item =>  item.horas === this.procurar.horas);
  //   this.procurar = null;
  //   return this.resultado;
  //   // return this.service.pesquisarNome(this.procurar);  
  // };

  ngOnInit() {
  }

}

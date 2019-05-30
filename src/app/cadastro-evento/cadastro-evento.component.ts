import { Component, OnInit } from '@angular/core';
import { GerenciadorService } from '../gerenciador.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  nome = null;
  datainicial = null;
  datafinal = null;
  local = null;
  nomepalestrante = null;
  horas = null;

  constructor(private service: GerenciadorService,private http: HttpClient) {}

  salvar() {
    
    this.service.cadastrarEvento(this.nome,
      this.datainicial,
      this.datafinal,
      this.local,
      this.nomepalestrante,
      this.horas
      );
    this.nome = null;
    this.datainicial = null;
    this.datafinal = null;
    this.local = null;
    this.nomepalestrante = null;
    this.horas = null;
  };

  onChange(event){
    console.log(event);
    const seletedFiles  = <FileList>event.srcElement.files;
    document.getElementById("arquivoLabel").innerHTML = seletedFiles[0].name;
  };

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);

      this.http.post('/upload', formData);
    }
  }
  ngOnInit() {
  }
  
}

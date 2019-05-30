import { Component, OnInit } from '@angular/core';
import { GerenciadorService } from '../gerenciador.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private service: GerenciadorService) {}

  ngOnInit() {
  }

}

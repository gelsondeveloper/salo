import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estagios-listagem',
  templateUrl: './estagios-listagem.component.html',
  styleUrls: ['./estagios-listagem.component.scss']
})
export class EstagiosListagemComponent implements OnInit {
  estagios = [
    {id: 1, empresa: 'Unitel', curso: 'Informática', area: 'Programação Web', tempo: '6 meses' },
    {id: 2, empresa: 'Jupiter', curso: 'Informática', area: 'Teste', tempo: '2 anos' },
    {id: 3, empresa: 'Minfin', curso: 'Gestão e Administração', area: 'Orçamento geral do Estado', tempo: '2 anos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

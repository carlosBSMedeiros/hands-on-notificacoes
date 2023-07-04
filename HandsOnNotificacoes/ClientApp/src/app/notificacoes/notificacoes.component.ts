import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html'
})
export class NotificacoesComponent {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
 
  }
}


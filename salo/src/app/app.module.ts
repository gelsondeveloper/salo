import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstagiosListagemComponent } from './estagios-listagem/estagios-listagem.component';
import { EstagioService } from './estagio.service';

@NgModule({
  declarations: [
    AppComponent,
    EstagiosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EstagioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

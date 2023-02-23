import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertarInforcocheComponent } from './components/insertar-inforcoche/insertar-inforcoche.component';
import { ListarInforcocheComponent } from './components/listar-inforcoche/listar-inforcoche.component';
import { InforCocheService } from './services/inforcoche.service';
import { UsersService } from './services/users.service';
import { LoginComponent } from './components/login/login.component';
import { EditarInforcocheComponent } from './components/editar-inforcoche/editar-inforcoche.component';
@NgModule({
  declarations: [
    AppComponent,
    InsertarInforcocheComponent,
    ListarInforcocheComponent,
    LoginComponent,
    EditarInforcocheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    InforCocheService,
    UsersService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

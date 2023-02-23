import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarInforcocheComponent } from './components/insertar-inforcoche/insertar-inforcoche.component';
import { ListarInforcocheComponent } from './components/listar-inforcoche/listar-inforcoche.component';
import { LoginComponent } from './components/login/login.component';
import { EditarInforcocheComponent } from './components/editar-inforcoche/editar-inforcoche.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'login-page'},
{ path: 'login-page', component: LoginComponent},
{ path: 'listar-inforcoche', component: ListarInforcocheComponent},
{ path: 'insertar-inforcoche', component: InsertarInforcocheComponent},
{ path: 'editar-inforcoche/:id', component: EditarInforcocheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'empresa', component: EmpresaComponent },
    { path: 'pessoa', component: PessoaComponent }
    ], 
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

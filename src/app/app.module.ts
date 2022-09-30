import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { EmpresaComponent } from './empresa/empresa.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { GridComponent } from './component/grid/grid.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgChatModule } from 'ng-chat';
import { MyAdapterComponent } from './component/my-adapter/my-adapter.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    EmpresaComponent,
    PessoaComponent,
    GridComponent,
    MyAdapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,
    MatGridListModule,
    FormsModule,
    NgChatModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

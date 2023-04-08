import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailarticleComponent } from './detailarticle/detailarticle.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { PrivecyComponent } from './privecy/privecy.component';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path : '' , redirectTo : '/home' , pathMatch : 'full'},


  { path : 'home' , component : HomeComponent},

  { path : 'article/:id' , component : DetailarticleComponent},

  { path : 'create' , canActivate:[AuthGuard] , component : CreatearticleComponent},

  { path : 'about' , component : AboutComponent},

  { path : 'privecy' , component : PrivecyComponent},

  { path : 'author/:id' , component : AuthorComponent},

  { path : 'login' , component : LoginComponent},

  { path : 'register' , component : RegisterComponent},

  { path : 'notfound' , component : NotfoundComponent},









];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { DetailarticleComponent } from './detailarticle/detailarticle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrivecyComponent } from './privecy/privecy.component';
import { CoverComponent } from './home/cover/cover.component';
import { BloglisteComponent } from './home/blogliste/blogliste.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    CreatearticleComponent,
    DetailarticleComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    PrivecyComponent,
    CoverComponent,
    BloglisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

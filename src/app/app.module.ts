import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgencyComponent } from 'src/modules/agency/pages/agency/agency.component';
import { NavbarComponent } from 'src/modules/agency/pages/agency/navbar/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

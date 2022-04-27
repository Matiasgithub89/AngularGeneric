import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { LocalidadesService } from './services/localidades.service';
import { HttpClientModule } from '@angular/common/http';
import { AutoresComponent } from './components/autores/autores.component'
import { AutoresService } from './services/autores.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalidadesComponent,
    AutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocalidadesService,AutoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

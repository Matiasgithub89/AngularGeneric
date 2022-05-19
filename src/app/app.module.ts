import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';



import { LocalidadesComponent } from './components/localidades/localidades.component';
import { LocalidadesService } from './services/localidades.service';
import { HttpClientModule } from '@angular/common/http';
import { AutoresComponent } from './components/autores/autores.component'
import { AutoresService } from './services/autores.service';
import { LibrosComponent } from './components/libros/libros.component';
import { LibrosService } from './services/libros.service';
import { LocalidadDialogComponent } from './components/localidad-dialog/localidad-dialog.component';
import { AutoresDialogComponent } from './components/autores-dialog/autores-dialog.component';
import { BaseDialogComponent } from './components/base-dialog/base-dialog.component';
import { LocalidadDeleteComponent } from './components/localidad-delete/localidad-delete.component';
import { LocalidadFilterComponent } from './components/localidad-filter/localidad-filter.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalidadesComponent,
    AutoresComponent,
    LibrosComponent,
    LocalidadDialogComponent,
    AutoresDialogComponent,
    BaseDialogComponent,
    LocalidadDeleteComponent,
    LocalidadFilterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocalidadesService,AutoresService,LibrosService],
  entryComponents:[
    LocalidadesComponent,
    LocalidadDeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AutoresService } from 'src/app/services/autores.service';
import { Autor } from '../model/autor';
import { LocalidadDialogComponent } from '../localidad-dialog/localidad-dialog.component';
import { AutoresDialogComponent } from '../autores-dialog/autores-dialog.component';
import { TablaColumna, TablaTipoColumna } from 'src/app/shared/model/tablaColumna';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  tablaColumnas: TablaColumna[]= [
    { 
      valor:"id",
      tipo: TablaTipoColumna.NUMERO
    },
    {
      valor:'nombre',
      tipo: TablaTipoColumna.TEXTO
    },
    {
      valor:'apellido',
      tipo: TablaTipoColumna.TEXTO
    },
    {
      valor:'biografia',
      tipo: TablaTipoColumna.TEXTO
    }
  ];
  //autoresList: Autor[];
  tablaHead:string[]=['id','nombre','apellido','biografia','acciones']
  editable:boolean = true;
  entidad:string="Autor"
  constructor(
    public dialog: MatDialog,
    public autorService: AutoresService
  ) { }

  ngOnInit(): void {
    //this.getAllAutores();
  }
 
  edit(autor: Autor){
    const dialogEdit = this.dialog.open( AutoresDialogComponent,{
      disableClose:true,
      width:'60%',
      data:autor
    });

  }
  delete(autor: Autor){
    
  }

}

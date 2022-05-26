import { Component, OnInit } from '@angular/core';
import { Localidad } from '../model/localidad';
import { LocalidadesService } from '../../services/localidades.service';
import { MatDialog } from '@angular/material/dialog';
import { LocalidadDialogComponent } from '../localidad-dialog/localidad-dialog.component';
import { LocalidadDeleteComponent } from '../localidad-delete/localidad-delete.component';
import { TablaColumna, TablaTipoColumna } from 'src/app/shared/model/tablaColumna';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {
   
  tablaColumnas: TablaColumna[]= [
    { 
      valor:"id",
      tipo: TablaTipoColumna.NUMERO,
      //visible:false
    },
    {
      valor:'denominacion',
      tipo: TablaTipoColumna.TEXTO,
      //visible:false
    },
    {
      valor:'codigoPostal',
      tipo: TablaTipoColumna.TEXTO,
      //visible:true
    }
  ];
  tablaHead: string[]=['id','denominacion','codigoPostal']
  //seteo la variable que desencadena la habilitacion de los iconos.
  editable:boolean = true;
  entidad:string="Localidad"
  constructor(
    public localidadesService: LocalidadesService
  ) { }

  //Si editable viene como true se agregara en la cabecera de la tabla la opcion y por consiguiente los iconos en el table.
  ngOnInit(): void {
    if (this.editable==true){
      this.tablaHead.push('acciones')
    }
     
  }

  

}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { TablaColumna } from '../../model/tablaColumna';
import { GenericService } from 'src/app/services/generic.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { GenericHelper } from './generic-helper';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    
    @Input()servicio: GenericService<any>;
    @Input()tablaColumnas!: TablaColumna[];
    @Input()tablaHead: String[]
    @Input()editable: Boolean;
    @Input()entidad:String;
    dataSource: any[];
    //displayedColumns: string[] = ['id','denominacion','codigoPostal'];    
    
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
    //this.tablaColumnas.forEach(columna => {
    //  if(columna.visible=true){
    //    this.tablaHead.push(columna.valor)
    //  }      
    //});
  }
  findAll(): void{
    this.servicio.findAll().subscribe(
      response => {
        JSON.stringify(this.tablaColumnas);
        JSON.stringify(response);
        this.dataSource= response as any[];
        console.log(this.dataSource)
      },
      err =>{
        console.log("Error al mostrar"+ err)
      }
    )
  }//ESTE EDIT SERA EL QUE HAGA TOMAS!
  edit(data:any){
    let genericHelper = new GenericHelper();
    //ESTOS CAMPOS SERAN LOS QUE DEFINA PELI
    genericHelper.title="Editar "+ this.entidad;
    genericHelper.subtitle="Modifique los datos";
    genericHelper.content="";
    genericHelper.entidad= data;
    genericHelper.isEdit=true;
    const dialogEdit= this.dialog.open( DialogComponent,{
      disableClose:true,
      width:'60%',
      //ESTA DATA SERA LA QUE PASE MATIAS
      data:genericHelper
    });         
   
  }
  delete(){
    
  }
}

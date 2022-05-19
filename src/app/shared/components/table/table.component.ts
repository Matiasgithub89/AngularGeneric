import { Component, Input, OnInit } from '@angular/core';
import { TablaColumna } from '../../model/tablaColumna';
import { GenericService } from 'src/app/services/generic.service';

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
    dataSource: any[];
    //displayedColumns: string[] = ['id','denominacion','codigoPostal'];    
    
  constructor() { }

  ngOnInit(): void {
    this.findAll();
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
  }
  edit(){   

  }
  delete(){
    
  }
}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericService } from 'src/app/services/generic.service';
import { TablaColumna } from '../../model/tablaColumna';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input()tablaColumnas!: TablaColumna[];
  @Input()servicio: GenericService<any>
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public genericHelper:any
    
  ) { }

  cancel(){
    this.dialogRef.close();
  }
  save(){
    console.log("guardado");
    }
  
  ngOnInit(): void {
  }

}

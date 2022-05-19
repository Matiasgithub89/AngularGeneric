import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores-dialog',
  templateUrl: './autores-dialog.component.html',
  styleUrls: ['./autores-dialog.component.css']
})
export class AutoresDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AutoresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public autor:any,
    private autoresService: AutoresService
  ) { }

  save(){
    this.autoresService.save(this.autor).subscribe(response =>{
      console.log("se modifico la localidad: " + response)
    },
    err=>{
      console.log("Error al modificar: " + err)
    }
    );
  }
  cancel(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}

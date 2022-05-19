import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalidadesService } from 'src/app/services/localidades.service';

@Component({
  selector: 'app-localidad-delete',
  templateUrl: './localidad-delete.component.html',
  styleUrls: ['./localidad-delete.component.css']
})
export class LocalidadDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LocalidadDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public localidad:any,
    private localidadesService: LocalidadesService
  ) { }

  ngOnInit(): void {
  }
  delete(){
    this.localidadesService.delete(this.localidad.id).subscribe(
      response =>{
        console.log("se elimino la localidad: " + response)
        this.cancel();
      },
      err=>{
        console.log("Error al eliminar: " + err)
        this.cancel();
      }
    );
  }
  cancel(){
    this.dialogRef.close();
  }

}

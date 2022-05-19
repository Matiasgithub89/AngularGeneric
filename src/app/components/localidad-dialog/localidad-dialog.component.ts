import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LocalidadesService } from 'src/app/services/localidades.service';


@Component({
  selector: 'app-localidad-dialog',
  templateUrl: './localidad-dialog.component.html',
  styleUrls: ['./localidad-dialog.component.css']
})
export class LocalidadDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LocalidadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public localidad:any,
    private localidadesService: LocalidadesService
  ) { }

  save(){
    this.localidadesService.save(this.localidad).subscribe(

      response =>{
        console.log("se modifico la localidad: " + response)
        this.cancel();
      },
      err=>{
        console.log("Error al modificar: " + err)
        this.cancel();
      }
    );
  }
  cancel(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}

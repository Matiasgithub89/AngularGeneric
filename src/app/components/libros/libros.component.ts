import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { LibrosService } from 'src/app/services/libros.service';
import { Autor } from '../model/autor';
import { Libro } from '../model/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros:any;
  librosList:Libro[];
  displayedColumns:string[]=['id','titulo','fecha','genero','paginas','autores'];

  constructor(
    private libroService: LibrosService
    
  ) {
    
   }

  ngOnInit(): void {
    this.getAllLibros();
  }
  getAllLibros():void{
    this.libroService.findAll()
      .subscribe((response:any)=>{
        this.libros = response as Libro[] ;//pido solo la response porque aca ya viene solo el data, desde el service
        console.log(this.libros)
        this.librosList= this.libros;       
      })
  }
  
}

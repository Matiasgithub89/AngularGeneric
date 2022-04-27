import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores.service';
import { Autor } from '../model/autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autoresList: Autor[];
  displayedColumns:string[]=['id','nombre','apellido','biografia']
  constructor(
    private autorService: AutoresService
  ) { }

  ngOnInit(): void {
    this.getAllAutores();
  }
  getAllAutores():void{
    this.autorService.findAll()//hago el pedido al back
      .subscribe((response:any)=>{//castea la respuesta en caso de que se conecte sin problemas, a mi variable localidad list. que es un array de localidades
        this.autoresList = response as Autor[];//pido solo la response porque aca ya viene solo el data, desde el service
      });
  }

}

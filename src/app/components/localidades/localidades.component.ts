import { Component, OnInit } from '@angular/core';
import { Localidad } from '../model/localidad';
import { LocalidadesService } from '../../services/localidades.service';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {
  
  localidadesList: Localidad[];
  displayedColumns: string[]=['id','denominacion','codigoPostal'];


  constructor(
    private localidadeService: LocalidadesService
  ) { }

  ngOnInit(): void {
    this.getAllLocalidades();
  }

  getAllLocalidades(): void{
    this.localidadeService.findAll()//hago el pedido al back
      .subscribe((response:any)=>{//castea la respuesta en caso de que se conecte sin problemas, a mi variable localidad list. que es un array de localidades
        this.localidadesList = response as Localidad[];//pido solo la response porque aca ya viene solo el data, desde el service
      });
  }

}

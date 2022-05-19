import { Component } from '@angular/core';
import { TablaTipoColumna } from './shared/model/tablaColumna';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  object: {[key: string]: string} = {key: 'string', value: 'TEXTO'}
}

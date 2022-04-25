import { Component } from '@angular/core';

interface Menu {
  titulo: string;
  imagem: string;
  path: string
}


@Component({
  selector: 'ngf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercicio-semana-8';

  listaMenu: Menu[] = [
  {
    titulo: 'Comidas',
    imagem: '\assets\imagens\Lanches.png',
    path: 'comidas'
  },
  {
    titulo: 'Bebidas',
    imagem: '\assets\imagens\bebidas.png',
    path: 'bebidas'
  }
  ]
}


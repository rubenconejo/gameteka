import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Juegos',
        items: [
          {
            label: 'Añadir',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Borrar',
            icon: 'pi pi-fw pi-minus',
          },
        ],
      },
      {
        label: 'Plataformas'
      },
      {
        label: 'Desconectar',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}

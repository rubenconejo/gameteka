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
      },
      {
        label: 'Plataformas'
      },
      {
        label: 'Desconectar',
        icon: 'pi pi-fw pi-power-off'
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Código de inicialización si es necesario
  }

  onPassengerClick() {
    // Navega a la página para pasajeros
    this.router.navigate(['/passenger']); // Ajusta la ruta según tu configuración
  }

  onDriverClick() {
    // Navega a la página para conductores
    this.router.navigate(['/driver']); // Ajusta la ruta según tu configuración
  }

}


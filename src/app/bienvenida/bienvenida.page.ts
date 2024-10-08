import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  irAInicioSesion() {
    this.router.navigate(['/inicio-sesion']); // Redirige a la página de inicio-sesion
  }
}

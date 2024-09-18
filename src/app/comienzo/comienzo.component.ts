import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.component.html',
  styleUrls: ['./comienzo.component.scss'],
})
export class ComienzoComponent implements OnInit {

  constructor(private router: Router) { } // Inyecta Router

  ngOnInit() {}

  navigateToPage() {
    this.router.navigate(['/pagina-destino']); // Reemplaza '/pagina-destino' con la ruta de tu página destino
  }
}

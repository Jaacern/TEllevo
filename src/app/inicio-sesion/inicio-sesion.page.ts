import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  navegarACrearCuenta() {
    this.navController.navigateForward('/crea-tu-cuenta');
  }
}

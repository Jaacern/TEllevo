import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'crea-tu-cuenta',
    loadChildren: () => import('./crea-tu-cuenta/crea-tu-cuenta.module').then(m => m.CreaTuCuentaPageModule)
  },
  {
    path: 'terminos-condiciones',
    loadChildren: () => import('./terminos-condiciones/terminos-condiciones.module').then(m => m.TerminosCondicionesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'soy-pasajero',
    loadChildren: () => import('./soy-pasajero/soy-pasajero.module').then(m => m.SoyPasajeroPageModule)
  },
  {
    path: 'soy-chofer',
    loadChildren: () => import('./soy-chofer/soy-chofer.module').then(m => m.SoyChoferPageModule)
  },
  {
    path: 'mis-viajes',
    loadChildren: () => import('./mis-viajes/mis-viajes.module').then(m => m.MisViajesPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then(m => m.MensajesPageModule)
  },
  {
    path: 'editar-informacion',
    loadChildren: () => import('./editar-informacion/editar-informacion.module').then(m => m.EditarInformacionPageModule)
  },
  {
    path: 'mi-billetera',
    loadChildren: () => import('./mi-billetera/mi-billetera.module').then(m => m.MiBilleteraPageModule)
  },
  {
    path: 'credito-debito',
    loadChildren: () => import('./credito-debito/credito-debito.module').then(m => m.CreditoDebitoPageModule)
  },
  {
    path: 'bitcoin',
    loadChildren: () => import('./bitcoin/bitcoin.module').then(m => m.BitcoinPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./transferencia/transferencia.module').then(m => m.TransferenciaPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then(m => m.BuscarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

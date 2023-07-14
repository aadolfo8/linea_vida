import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { CarouselAyosComponent } from './pages/carousel-ayos/carousel-ayos.component';
import { CarouselMesesComponent } from './pages/carousel-meses/carousel-meses.component';
import { CarouselEventosComponent } from './pages/carousel-eventos/carousel-eventos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PaginaPrincipalComponent},
  { path: 'years', component: CarouselAyosComponent},
  { path: 'meses', component: CarouselMesesComponent},
  { path: 'evento', component: CarouselEventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

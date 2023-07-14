import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

import { PrincipalCarouselComponent } from './components/principal-carousel/principal-carousel.component';
import { PaginaEdicionComponent } from './pages/pagina-edicion/pagina-edicion.component';
import { CarouselAyosComponent } from './pages/carousel-ayos/carousel-ayos.component';
import { CarouselMesesComponent } from './pages/carousel-meses/carousel-meses.component';
import { CarouselEventosComponent } from './pages/carousel-eventos/carousel-eventos.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PrincipalCarouselComponent,
    PaginaEdicionComponent,
    CarouselAyosComponent,
    CarouselMesesComponent,
    CarouselEventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';
import { MonnComponent } from './monn/monn.component'

@NgModule({
  declarations: [
    AppComponent,
    PaginaPokemonComponent,
    MonnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

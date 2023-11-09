import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';
import { MonnComponent } from './monn/monn.component';

const routes: Routes = [
  {path : 'pagina-pokemon/:path', component : PaginaPokemonComponent},
  {path : 'monn/:path', component : MonnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

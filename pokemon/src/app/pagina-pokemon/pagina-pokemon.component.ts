import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Root } from '../app-module';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon, Root1 } from './pagina-module';

@Component({
  selector: 'app-pagina-pokemon',
  templateUrl: './pagina-pokemon.component.html',
  styleUrls: ['./pagina-pokemon.component.css']
})
export class PaginaPokemonComponent {

  obs !:  Observable<Root1>
  id !: string | null
  data : Pokemon[] = []
  constructor (private http : HttpClient , private Parm : ActivatedRoute){
    
    
    this.Parm.paramMap.subscribe(this.Cerca)
  }

  Cerca(param : ParamMap){
    this.id = param.get("path")
    
    this.obs = this.http.get<Root1>('https://pokeapi.co/api/v2/type/'+ this.id)
    
    this.obs.subscribe(this.getInformazione)

  }
  getInformazione ( data : Root1)  {

    this.data = data.pokemon

  }
  vai(url:string){
    const parts =url.split('/');
    console.log(parts)
    return parts.at(-2)
  }

}

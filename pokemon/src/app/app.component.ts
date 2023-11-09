import { Component } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Result, Root } from './app-module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  obs !: Observable<Root>
  data !: Result[] 

  constructor (private http : HttpClient){
    this.obs = this.http.get<Root>('https://pokeapi.co/api/v2/type')

    this.obs.subscribe(this.getH)

  }
  getH = ( data : Root) => {

    this.data = data.results
  }

  vai(url:string){
    const parts =url.split('/');
    
    return parts.at(-2)
  }

}

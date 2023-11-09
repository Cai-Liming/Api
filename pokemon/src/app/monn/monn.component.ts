import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Root } from './monn.module';

@Component({
  selector: 'app-monn',
  templateUrl: './monn.component.html',
  styleUrls: ['./monn.component.css']
})
export class MonnComponent {

  obs !: Observable<object>
  id !: string | null
  data !: Root
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {


    this.activatedRoute.paramMap.subscribe(
      params => {
        

        this.Cerca(params.get('path'))
      }

    )
  }

  Cerca = (id: string | null) => {
    this.obs = this.http.get<Root>('https://pokeapi.co/api/v2/pokemon/' + id)
    this.obs.subscribe(this.getInformazione)
  }

  getInformazione = (data: any) => {

    this.data = data

  }

  


}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ServicioService {
  constructor(private http: Http) {}

  getAlgo(): Observable<any> {
    return this.http.get('http://localhost:8000/prueba')
                .map(response => response.json());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Animales } from '../../app/interfaces/animales';
import { ANIMALES } from '../../assets/data/data.animales';
/*
  Generated class for the SonidosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SonidosProvider {

  animales: Animales[] = [];

  constructor(public http: HttpClient) {
  }

  // getData(): Observable<any> {

  //   return this.http.get('../../assets/data/data.animales.ts');
  // }

  getData(): Animales[] {

    return this.animales = ANIMALES.slice(0);
  }
}

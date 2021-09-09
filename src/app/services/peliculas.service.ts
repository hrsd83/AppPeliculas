import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interface/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getCartelera():Observable<CarteleraResponse>{

     return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=d1efa4f220d32665ce0fb8b3dcfcd051')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Place } from './place';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  readonly ROOT_URL = 'http://161.35.15.186:3000';
  //readonly ROOT_URL = 'http://localhost:3000';
  places: Observable<any>;
  constructor(private http : HttpClient){}

  createPlace(place : Place){
    return this.http.post(this.ROOT_URL + '/places', place);
}
deletePlace(id : string){
  return this.http.delete(this.ROOT_URL + '/places/' +`${id}`);
}

putPlace(id : string,place : Place){
  return this.http.put(this.ROOT_URL + '/places/' +`${id}`, place);
}

getAllPlaces(){
  return this.http.get(this.ROOT_URL + '/places');
}
}
 
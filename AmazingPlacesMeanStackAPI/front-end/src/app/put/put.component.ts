import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  id:string;
  name : string;
  state: string;
  country : string;
  rating : number;
  place : Place;
  storedPlace : any = undefined;

  constructor(public placesService : PlacesService) { }

  ngOnInit() {
  }
  onPut(){
    this.place  = {
      name: this.name,
      state: this.state,
      country: this.country,
      rating: Number(this.rating)
    }
    this.placesService.putPlace(this.id, this.place).subscribe((res)=>{
      this.storedPlace = res;
      console.log(res);
    })
  }
  check(){
    if(this.storedPlace!=undefined){
      return true;
    }
    else
    {
      return false;
    }
  }
  onClear(){
      this.id =null;
      this.name = null;
      this.state = null;
      this.country = null;
      this.rating = null;
      this.storedPlace = undefined;
  }

}

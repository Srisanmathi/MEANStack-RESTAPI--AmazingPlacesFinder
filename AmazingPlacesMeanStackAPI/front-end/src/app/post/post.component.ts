import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  name : string;
  state: string;
  country : string;
  rating : number;
  place : Place;
  storedPlace : any = undefined;
  constructor(public placesService : PlacesService) { }

  ngOnInit() {
  }
  onPost(){
    this.place  = {
      name: this.name,
      state: this.state,
      country: this.country,
      rating: Number(this.rating)
    }
    this.placesService.createPlace(this.place).subscribe((res)=>{
      this.storedPlace = res;
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
    
      this.name = null;
      this.state = null;
      this.country = null;
      this.rating = null;
      this.storedPlace = undefined;
  }

}

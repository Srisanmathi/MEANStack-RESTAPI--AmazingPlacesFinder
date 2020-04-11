import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent implements OnInit {

  id:string;
  name : string;
  state: string;
  country : string;
  rating : number;
  place : Place;
  storedPlace : any = undefined;
  change : any;
  constructor(public placesService : PlacesService) { }

  ngOnInit() {
  }
  onPatch(){
    this.place  = {
      name: this.name,
      state: this.state,
      country: this.country,
      rating: Number(this.rating)
    }
    this.change = {rating: Number(this.rating)};
    this.placesService.patchPlace(this.id,this.change).subscribe((res)=>{
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

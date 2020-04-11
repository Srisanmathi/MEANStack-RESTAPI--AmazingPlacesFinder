import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-getone',
  templateUrl: './getone.component.html',
  styleUrls: ['./getone.component.css']
})
export class GetoneComponent implements OnInit {

  id : string;
  isFound : boolean = false;
  places : Object;
  constructor(public placesService : PlacesService) { }

  ngOnInit() {
  }
  onGetOne(){
    this.placesService.getPlaceByID(this.id).subscribe((res)=>{
      console.log(res);
      if(res){
        this.places = res;
        this.isFound = true;
      }
    })
  }
  onClear(){
    this.isFound = false;
    this.id = null;
}
}

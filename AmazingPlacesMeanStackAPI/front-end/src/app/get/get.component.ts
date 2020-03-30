import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  places : any = [];
  constructor(private placesService : PlacesService) { }

  ngOnInit() {
    this.placesService.getAllPlaces().subscribe((res)=>{
      this.places = res;
      console.log(res);
    })
  }

}

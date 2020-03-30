import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: string;
  isDeleted : boolean = false;
  constructor(public placesService : PlacesService) { }

  ngOnInit() {
  }

  onDelete(){
    this.placesService.deletePlace(this.id).subscribe((res)=>{
      console.log(res);
      if(res){
        this.isDeleted = true;
      }
    })
  }
  onClear(){
    this.isDeleted = false;
    this.id = null;
}
  
  }
  

 

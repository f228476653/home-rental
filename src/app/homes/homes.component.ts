import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  homes$ =  this.dataService.getHomes();
  ngOnInit(): void {
  }

}

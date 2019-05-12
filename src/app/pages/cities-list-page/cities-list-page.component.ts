import { Component, OnInit } from '@angular/core';
import { CitiesServiceService } from '../../services/cities-service.service';
import City from '../../Model/Cities';

@Component({
  selector: 'app-cities-list-page',
  templateUrl: './cities-list-page.component.html',
  styleUrls: ['./cities-list-page.component.scss']
})
export class CitiesListPageComponent implements OnInit {

cityList: City[];

constructor(private citiesServiceService: CitiesServiceService) { }

ngOnInit() {
this.getCitiesList();
}
getCitiesList():void{
  this.citiesServiceService.getCities().subscribe(cityList => this.cityList = cityList);
}

}

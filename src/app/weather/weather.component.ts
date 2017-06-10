import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
 
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []
 
})
export class WeatherComponent implements OnInit {
  id_city: string = "";
  id_state: string = "";
  op_city: string = "";
  op_region: string = "";
  op_country: string = "";
  op_date: string = "";
  op_text: string = "";
  op_temp: string = "";
  op_wind_speed: string = "";
  op_sunrise: string = "";
  op_sunset: string = "";
  op_humidity: string = "";
  op_pressure: string = "";
  constructor(private _sharedService: SharedService) {
  }
 
  ngOnInit() {
  }
 
  callWeatherService() { 
    this._sharedService.findWeather(this.id_city, this.id_state)
      .subscribe(
      lstresult => { 
        this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
        this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
        this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
        this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
        this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
        this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"];
        this.op_wind_speed = lstresult["query"]["results"]["channel"]["wind"]["speed"];
        this.op_sunrise = lstresult["query"]["results"]["channel"]["astronomy"]["sunrise"];
        this.op_sunset = lstresult["query"]["results"]["channel"]["astronomy"]["sunset"];
        this.op_humidity = lstresult["query"]["results"]["channel"]["atmosphere"]["humidity"];
        this.op_pressure = lstresult["query"]["results"]["channel"]["atmosphere"]["pressure"];
},

      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }
      ); 
  }
}
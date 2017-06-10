import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'weather', component: WeatherComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
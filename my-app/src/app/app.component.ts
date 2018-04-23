import { Component } from '@angular/core';
import { Cosa } from './cosa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Artist Island';
  featured = [new Cosa('javier', 'kajsfkjdbshbv j sjb cwhbfi wufw jf wjhbfjweh efjh ', require('../images/camera.png')), new Cosa('grecia', 'kajsfkjdbshbv j sjb cwhbfi wufw jf wjhbfjweh efjh ', require('../images/camera.png')),new Cosa('pedro', 'kajsfkjdbshbv j sjb cwhbfi wufw jf wjhbfjweh efjh ', require('../images/camera.png'))];
}

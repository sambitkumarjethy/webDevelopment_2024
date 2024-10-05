import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrl: './app.component.css'
 styles:[`
    h3 {
    color: red
    }
  `]

})
export class AppComponent {
  name = 'Sambit';
  address ="Cuttack"

  changeName(){
    this.name = 'Sambit jethy'
  }
}

import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  templateUrl: './b1.component.html',
// providers:[CounterService], -- It helps to create a new instance of global variable in a component
  styleUrl: './b1.component.css'
})
export class B1Component {
  constructor(private counterService:CounterService){
     
  }
   getcount(){
       return this.counterService.getCounter()
   }
    incrementCount(){
       return this.counterService.incrementCounter()
   }
}

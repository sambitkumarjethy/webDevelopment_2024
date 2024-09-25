import { CounterService } from './../../services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  signalCount = this.counterService.getSignalCounter();
  constructor(private counterService:CounterService){
     
  }
   getcount(){
       return this.counterService.getCounter()
   }
    incrementCount(){
       return this.counterService.incrementCounter()
   }
   getSignalCount(){
    return this.counterService.getSignalCounter()
   }
   doublecount(){
     return this.counterService.getDoubleCounter()
   }

   incrementSignalCount(){
     return this.counterService.incrementSignalCounter()
   }
}

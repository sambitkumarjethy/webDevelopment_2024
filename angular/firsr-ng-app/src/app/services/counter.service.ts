import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;  // Regular counter
  private signalCount = signal(0);  // Signal initialized to 0

  doubleCount: Signal<number> = computed(() => this.signalCount() * 2);

  constructor(){
     effect(()=>{
        console.log(this.count,this.signalCount(),this.doubleCount()) 
   })
  }
 

  // Regular counter methods
  getCounter() {
    return this.count;
  }

  incrementCounter() {
    this.count = this.count + 1;
  }

  // Signal counter methods
  getSignalCounter() {
    return this.signalCount;  // Return the signal itself
  }

  incrementSignalCounter() {
    // Increment the signal's value
    // this.signalCount.set(5);  // Signals must be invoked like functions
    this.signalCount.update((oldvalue) =>{
      return oldvalue + 1;
    })
  }

  getDoubleCounter(){
      return this.doubleCount;
  }
}

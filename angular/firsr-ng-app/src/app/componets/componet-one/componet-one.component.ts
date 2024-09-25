import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user';

function formatName(value:string){
  return value.toUpperCase();
}

function formatSalary (value:number){
  return 'RS.'+ value + '/per Hour';
}

@Component({
  selector: 'app-componet-one',
  standalone: true,
  imports: [],
  templateUrl: './componet-one.component.html',
  styleUrl: './componet-one.component.css'
})
export class ComponetOneComponent implements OnInit, OnDestroy , OnChanges {
  @Input({alias:"user_name", transform:formatName}) name = ""
  @Input() called = ""
  @Input({transform:booleanAttribute}) isSingle !: boolean;
  @Input({transform:numberAttribute}) salary !:number;

  @Output() myEvent = new EventEmitter<User>()
  sendData(){
     this.myEvent.emit({name:this.name,newSalary:20000})
  }

  constructor(){

      //initial properties
      // dependency Injection
      //event Lister register
      console.log("constructor called from component_one",this.name)
    }

    ngOnInit(){

       //initial properties
      //event Lister register
      //initial ApI call
      console.log("ngOnInit called from component_one",this.name)
    }

    ngOnChanges(changes:SimpleChanges){
      console.log('ngOnChanges from component_one',changes)
      
    }

    ngOnDestroy(){
      // clean up is done
      // unregister event listner
      console.log("componet destroyed from component_one",this.name)
    }
 
}

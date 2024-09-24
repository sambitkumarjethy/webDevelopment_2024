import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
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
export class ComponetOneComponent {
  @Input({alias:"user_name", transform:formatName}) name = ""
  @Input() called = ""
  @Input({transform:booleanAttribute}) isSingle !: boolean;
  @Input({transform:numberAttribute}) salary !:number;

  @Output() myEvent = new EventEmitter<User>()
  sendData(){
     this.myEvent.emit({name:this.name,newSalary:20000})
  }
 
}

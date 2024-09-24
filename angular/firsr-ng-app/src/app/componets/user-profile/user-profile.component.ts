import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ComponetOneComponent } from '../componet-one/componet-one.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule, ComponetOneComponent ,ChildComponentComponent, CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  
    name = "Sambit"
    Status = "Single"
    salary = 10000
    phoneno= 1234567890
    isBtnDisablled = true
    inputvalue= "test"
    twowayvalue= "two way data binding ..............."

    users = [
      {
        name : 'Sambit', isSingle: true, salary: 1000, called:"1st Time"
      },
       {
        name : 'Suresh', isSingle: false, salary: 1800, called:"2nd Time"
      },
       {
        name : 'Millan', isSingle: true, salary: 1200, called:"3rd Time"
      },
    ]
 
    onchange(e:Event){
      const value = (e?.target as HTMLInputElement).value;
      console.log(value)
      this.inputvalue = value;
    }
    
    receivedData(e:User){
      console.log(e)

      const userIndex = this.users.findIndex(user=>user.name.toLocaleLowerCase() == e.name.toLocaleLowerCase())
      console.log(userIndex)
      this.users[userIndex].salary = e.newSalary
    }
   

}

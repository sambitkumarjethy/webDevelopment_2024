import { CustomstylingDirective } from './../../directives/customstyling.directive';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ComponetOneComponent } from '../componet-one/componet-one.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HeighlightDirective } from '../../directives/heighlight.directive';
import { JokeComponent } from '../joke/joke.component';
import { AComponent } from '../a/a.component';
import { B1Component } from '../b1/b1.component';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule, ComponetOneComponent ,ChildComponentComponent, CountryCodePipe,HeighlightDirective,CustomstylingDirective,JokeComponent, AComponent,B1Component,B2Component],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit,OnDestroy,OnChanges, AfterViewInit {
  
    name = "Sambit"
    Status = "Single"
    salary = 10000
    phoneno= 1234567890
    isBtnDisablled = true
    isSingle = true
    inputvalue= "test"
    twowayvalue= "two way data binding ..............."
    bgcolor = "brown"
    txtcolor ="white"

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

     // @viewChild("myheading") heading?:ElementRef
     @ViewChild ("myheading", { static: false }) heading?:ElementRef

    constructor(){

      //initial properties
      // dependency Injection
      //event Lister register
      console.log("constructor called",this.name)
      console.log("constructor called",this.heading?.nativeElement.textContent)
    }

    ngOnChanges(changes:SimpleChanges){
      console.log('ngOnChanges',changes)
      console.log("ngOnChanges called",this.heading?.nativeElement.textContent)
      
    }

    ngOnInit(){

       //initial properties
      //event Lister register
      //initial ApI call
      console.log("ngOnInit called",this.name)
       console.log("ngOnInit called",this.heading?.nativeElement.textContent)
    }

    ngAfterViewInit(): void {
      console.log("ngAfterViewInit called",this.heading?.nativeElement.textContent)
    }

     ngOnDestroy(){
      // clean up is done
      // unregister event listner
      console.log("componet destroyed from user_profile",this.users)
    }

  
    clear(){
      this.users = []
    }

   
   

}

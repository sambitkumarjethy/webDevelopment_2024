import { CustomstylingDirective } from '../../directives/customstyling.directive';
import { JokeService } from './../../services/joke.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CustomstylingDirective],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  joke = "Loading"

  constructor(private JokeService:JokeService){}
  ngOnInit(){
    this.getAnotherJoke()
  }

  getAnotherJoke(){
    this.JokeService.getJoke().subscribe({
      next:(data:any) =>
        this.joke = data.value,
      error:(error)=>console.log(error)
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  
  constructor(private http:HttpClient) { 
  
  }
  // Note - the bellow mentioned way is used for injection in function
 //  private http = inject(HttpClient)

  getJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=dev')
  }

}

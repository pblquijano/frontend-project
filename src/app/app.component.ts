import { Component } from '@angular/core';
import { Pokemon_response } from './models/pokemon_response';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public current_pokemon: Pokemon;
  public pokemon_response: Pokemon_response;
  constructor(){
    this.current_pokemon = null;
    this.pokemon_response = new Pokemon_response([]);
   
  }
}

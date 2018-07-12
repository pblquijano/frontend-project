import { Component } from '@angular/core';
import { Pokemon_response } from './models/pokemon_response';
import { Pokemon } from './models/pokemon';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public current_pokemon: Pokemon;
  public current_image: string;
  public pokemon_response: Pokemon_response;
  public subscription;
  constructor(private _dataServce:DataService){
    this.current_pokemon = null;
    this.current_image = "";
    this.pokemon_response = new Pokemon_response([]);
   
  }
  loadListData(){
  	console.log("Corre");
    this.subscription = this._dataServce
                            .getPokemonList()
                            .subscribe((res) => {this.pokemon_response = res;});
  }
  loadPokemonData(url){
    console.log("Corre");
    this.subscription = this._dataServce
                            .getPokemon(url)
                            .subscribe((res) => {this.current_pokemon= res; this.current_image = this.current_pokemon.sprites.front_default; console.log("Corre", res);});
  }
  ngOnInit(){
    this.loadListData();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}

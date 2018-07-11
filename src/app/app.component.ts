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
  public pokemon_response: Pokemon_response;
  public subscription;
  constructor(private _dataServce:DataService){
    this.current_pokemon = null;
    this.pokemon_response = new Pokemon_response([]);
   
  }
  loadData(){
  	console.log("Corre");
    this.subscription = this._dataServce
                            .getPokemonList()
                            .subscribe(res => this.pokemon_response = res, 
                                       error => console.log(error));
  }
  ngOnInit(){
    this.loadData();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}

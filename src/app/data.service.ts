import { Injectable } from '@angular/core';
import { Pokemon_response } from './models/pokemon_response';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {publishReplay, map, tap, refCount} from 'rxjs/operators';

@Injectable()
export class DataService {
	public _pokemon_response: Observable<Pokemon_response> = null;
  	constructor(private _http: Http) { }
	getPokemonList(){
		if (!this._pokemon_response) {
			
	      this._pokemon_response = this._http.get('https://pokeapi.co/api/v2/pokemon/?limit=150').pipe(
	        map((res: Response) => res.json()),
	        tap(friends => console.log('fetched pokemons')),
	        publishReplay(1),
	        refCount(),
	      );
	    }
	    return this._pokemon_response;
	}

}

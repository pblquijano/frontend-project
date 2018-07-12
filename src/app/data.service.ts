import { Injectable } from '@angular/core';
import { Pokemon_response } from './models/pokemon_response';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http';
import {
  CachedHttp,
  AsyncCache,
  MemoryDriver
} from 'angular-async-cache';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
	public _pokemon_response: Observable<Pokemon_response> = null;
  	constructor(
	    private http: HttpClient,
	    private asyncCache: AsyncCache,
	    private memoryDriver: MemoryDriver
	  ) {}

  	getPokemonList(): Observable<Pokemon_response> {
	    const resp$: Observable<Pokemon_response> = this.http.get<Pokemon_response>('https://pokeapi.co/api/v2/pokemon/?limit=150');
	    
	    return this.asyncCache.wrap(resp$, 'https://pokeapi.co/api/v2/pokemon/?limit=150', {
	      driver: this.memoryDriver // override the default and cache the data in memory
	    });
	}

	getPokemon(url): Observable<Pokemon> {
	    const resp$: Observable<Pokemon> = this.http.get<Pokemon>(url);
	    
	    return this.asyncCache.wrap(resp$, url, {
	      driver: this.memoryDriver // override the default and cache the data in memory
	    });
   
	}
	

}

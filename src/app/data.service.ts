import { Injectable } from '@angular/core';
import { Pokemon_response } from './models/pokemon_response';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {
  CachedHttp,
  AsyncCache,
  MemoryDriver
} from 'angular-async-cache';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
	public _pokemon_response: Observable<Pokemon_response> = null;
	public isOpenMenu: boolean;
  	public isMainLoading: boolean;
  	public currentIndex: number;
  	constructor(private http: HttpClient, private asyncCache: AsyncCache, private memoryDriver: MemoryDriver, private _scrollToService: ScrollToService) {
  		this.isOpenMenu = false;
	    this.isMainLoading = true;
	    this.currentIndex = null;
  	}

  	getPokemonList(): Observable<Pokemon_response> {
	    const resp$: Observable<Pokemon_response> = this.http.get<Pokemon_response>('https://pokeapi.co/api/v2/pokemon/?limit=150');
	    
	    return this.asyncCache.wrap(resp$, 'https://pokeapi.co/api/v2/pokemon/?limit=150', {
	      driver: this.memoryDriver // override the default and cache the data in memory
	    });
	}

	getPokemon(name): Observable<Pokemon> {
	    const resp$: Observable<Pokemon> = this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+name+"/");
	    
	    return this.asyncCache.wrap(resp$, "https://pokeapi.co/api/v2/pokemon/"+name+"/", {
	      driver: this.memoryDriver // override the default and cache the data in memory
	    });
   
	}
	setLoadingStatus(bool){
	    this.isMainLoading = bool;
	}

	setMenuStatus(bool){
	    this.isOpenMenu = bool;
	}

	public setCurrentIndex(index) {
    	if (this.currentIndex == null) {
    		const config: ScrollToConfigOptions = {
		      target: 'poke-'+index,
		      duration: 300,
		      easing: 'easeOutElastic',
		      offset: -6
		    };
		 
		    this._scrollToService.scrollTo(config);
    	}
	    this.currentIndex = index;
	}

}

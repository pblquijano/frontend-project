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
  	public types;
  	constructor(private http: HttpClient, private asyncCache: AsyncCache, private memoryDriver: MemoryDriver, private _scrollToService: ScrollToService) {
  		//Initial state
  		this.isOpenMenu = false;
	    this.isMainLoading = true;
	    this.currentIndex = null;

	    //Dictionary of pokémon types
	    this.types = {

	    	"normal":{
	    		"bg":"#BDBDBD",
	    		"cr":"#212121"
	    	},
	    	"fighting":{
	    		"bg":"#B71C1C",
	    		"cr":"#FFFFFF"
	    	},
	    	"flying":{
	    		"bg":"#A890F0",
	    		"cr":"#212121"
	    	},
	    	"poison":{
	    		"bg":"#673AB7",
	    		"cr":"#FFFFFF"
	    	},
	    	"ground":{
	    		"bg":"#E0C068",
	    		"cr":"#212121"
	    	},
	    	"rock":{
	    		"bg":"#795548",
	    		"cr":"#FFFFFF"
	    	},
	    	"bug":{
	    		"bg":"#CDDC39",
	    		"cr":"#212121"
	    	},
	    	"ghost":{
	    		"bg":"#3F51B5",
	    		"cr":"#FFFFFF"
	    	},
	    	"steel":{
	    		"bg":"#607D8B",
	    		"cr":"#FFFFFF"
	    	},
	    	"fire":{
	    		"bg":"#F44336",
	    		"cr":"#FFFFFF"
	    	},
	    	"water":{
	    		"bg":"#2196F3",
	    		"cr":"#212121"
	    	},
	    	"grass":{
	    		"bg":"#00C853",
	    		"cr":"#212121"
	    	},
	    	"electric":{
	    		"bg":"#FFC107",
	    		"cr":"#212121"
	    	},
	    	"psychic":{
	    		"bg":"#E91E63",
	    		"cr":"#FFFFFF"
	    	},
	    	"ice":{
	    		"bg":"#4FC3F7",
	    		"cr":"#212121"
	    	},
	    	"dragon":{
	    		"bg":"#5C6BC0",
	    		"cr":"#FFFFFF"
	    	},
	    	"dark":{
	    		"bg":"#212121",
	    		"cr":"#FFFFFF"
	    	},
	    	"fairy":{
	    		"bg":"#F48FB1",
	    		"cr":"#212121"
	    	}
		    
	    };
  	}
 
  	//Return the pokémon list.
  	getPokemonList(): Observable<Pokemon_response> {
	    const resp$: Observable<Pokemon_response> = this.http.get<Pokemon_response>('https://pokeapi.co/api/v2/pokemon/?limit=150');
	    
	    return this.asyncCache.wrap(resp$, 'https://pokeapi.co/api/v2/pokemon/?limit=150', {
	      driver: this.memoryDriver // override the default and cache the data in memory
	    });
	}

	//Returns the pokémon data according to its id
	getPokemon(name): Observable<Pokemon> {
	    const resp$: Observable<Pokemon> = this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+name+"/");
	    
	    return this.asyncCache.wrap(resp$, "https://pokeapi.co/api/v2/pokemon/"+name+"/", {
	      driver: this.memoryDriver // override the default and cache the data in memory
	    });
   
	}

	//Loading View Control
	setLoadingStatus(bool){
	    this.isMainLoading = bool;
	}

	//Menu View Control
	setMenuStatus(bool){
	    this.isOpenMenu = bool;
	}

	//Scrolls to the pokemon name in the list
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

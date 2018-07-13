import { Component } from '@angular/core';
import { Pokemon_response } from './models/pokemon_response';
import { Pokemon } from './models/pokemon';
import {DataService} from './data.service';
import {Subscription} from 'rxjs';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
    trigger('fade', [
            transition('void => *', [
                style({opacity: '0'}),
                animate(500)
            ]),
            transition('* => void', [
                animate(200, style({opacity: '0'}))
            ])
        ])
  ]
})
export class AppComponent {
  public current_pokemon: Pokemon;
  public current_image: string;
  public isOpenMenu: boolean;
  public isMainLoading: boolean;
  public pokemon_response: Pokemon_response;
  public watcher: Subscription;
  public activeMediaQuery = "";
  public subscription;
  constructor(private _dataServce:DataService, media: ObservableMedia){
    this.current_pokemon = null;
    this.isOpenMenu = false;
    this.isMainLoading = true;
    this.current_image = "";
    this.pokemon_response = new Pokemon_response([]);
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';      
      if ( change.mqAlias == 'lg') {
         this.setMenuStatus(false);
      }
    });
   
  }
  loadListData(){
  	console.log("Corre");
    this.subscription = this._dataServce
                            .getPokemonList()
                            .subscribe((res) => {
                              this.pokemon_response = res;
                              
                              setTimeout(() => {
                                    this.isMainLoading = false;
                              }, 700);
                              
                            });
  }

  loadPokemonData(url){
    console.log("Corre");
    this.subscription = this._dataServce
                            .getPokemon(url)
                            .subscribe((res) => {
                              this.current_pokemon= res;
                              this.current_image = "https://pokeres.bastionbot.org/images/pokemon/"+this.current_pokemon.id+".png";
                              //console.log("Corre", res);
                              this.setMenuStatus(false);
                            });
  }

  setMenuStatus(bool){
    console.log("menu;",bool)
    this.isOpenMenu = bool;
  }

  ngOnInit(){
    this.loadListData();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}

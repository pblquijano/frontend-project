import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { HttpErrorResponse} from '@angular/common/http';
import {DataService} from '../../data.service';
import {Subscription} from 'rxjs';
import { Transition } from '@uirouter/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [
    
    trigger('fade', [
            transition('void => *', [
                style({opacity: '0'}),
                animate(500)
            ]),
            transition('* => void', [
                animate(250, style({opacity: '0'}))
            ])
        ])
  ]

})
export class DetailComponent {
  public isLoading:boolean;
  public isError:boolean;
  public current_pokemon: Pokemon;
  public current_image: string;
  public subscription;
  constructor(public ds:DataService, private trans: Transition){
    //Shows the pokeball's loading view;
    this.isLoading = true;
    this.isError = false;
    var param = trans.params();
    this.current_pokemon = null;
    this.current_image = "";    
    this.loadPokemonData(param.name);
   
  }

  //Consumew the service to obtain the detail of the pokémon
  loadPokemonData(name){
    this.subscription = this.ds
                            .getPokemon(name)
                            .subscribe((res) => {
                              //Hides the main loading view if required;
                              this.ds.setLoadingStatus(false);
                              //Timeout for animation
                              setTimeout(() => {
                                //Sets the pokémon object
                                this.current_pokemon= res;
                                //Uses of the types dictionary to set colorsand backgrounds according to the name of the pokemon type
                                for (let type_data of this.current_pokemon.types) {
                                  type_data.type.background = this.ds.types[''+type_data.type.name].bg;
                                  type_data.type.color = this.ds.types[''+type_data.type.name].cr;
                                }

                                //Calculates the percentage of stats points according to the maximum number.
                                for (let stat of this.current_pokemon.stats) {
                                  stat.percent = parseInt(""+((stat.base_stat/252)*100));
                                }

                                //Sets the current index for show it in the side bar if required
                                this.ds.setCurrentIndex(this.current_pokemon.id - 1);

                                //Uses a service to get large images of the pokémon selected according to its id
                                this.current_image = "https://pokeres.bastionbot.org/images/pokemon/"+this.current_pokemon.id+".png";                              
                                //Hides the pokeball's loading view;
                                this.isLoading = false;

                              }, 300);
                            },(err: HttpErrorResponse) => {
                              if (err.status==404) {
                                //Hides the main loading view if required;
                                this.ds.setLoadingStatus(false);
                                //Timeout for animation
                                setTimeout(() => {                                      
                                      this.ds.currentIndex=null;
                                      //Shows the error message
                                      this.isError = true;
                                      //Hides the pokeball's loading view;
                                      this.isLoading = false;
                                }, 300);
                              }
                            });
  }


  ngOnInit(){
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

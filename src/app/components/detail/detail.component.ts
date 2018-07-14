import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
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
    this.isLoading = true;
    this.isError = false;
    var param = trans.params();
    this.current_pokemon = null;
    this.current_image = "";
    this.loadPokemonData(param.name);
   
  }
  

  loadPokemonData(name){
    this.subscription = this.ds
                            .getPokemon(name)
                            .subscribe((res) => {
                               this.ds.setLoadingStatus(false);
                              setTimeout(() => {
                                this.current_pokemon= res;
                                this.ds.setCurrentIndex(this.current_pokemon.id - 1);
                                this.current_image = "https://pokeres.bastionbot.org/images/pokemon/"+this.current_pokemon.id+".png";                              
                                
                                this.isLoading = false;
                                
                              }, 300);
                            },(err: HttpErrorResponse) => {
                              if (err.status==404) {
                                this.ds.setLoadingStatus(false);
                                
                              setTimeout(() => {
                                    this.ds.currentIndex=null;
                                    this.isError = true;
                                    this.isLoading = false;
                              }, 300);
                              }
                            });
  }


  ngOnInit(){
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}

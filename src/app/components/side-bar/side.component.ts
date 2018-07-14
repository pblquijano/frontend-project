import { Component, Input} from '@angular/core';
import { Pokemon_response } from '../../models/pokemon_response';;
import {DataService} from '../../data.service';
import {Subscription} from 'rxjs';
import { StateService } from '@uirouter/angular';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
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
export class SideComponent {
  public pokemon_response: Pokemon_response;
  public activeMediaQuery = "";
  public subscription;
  constructor(public ds:DataService, media: ObservableMedia, private $state: StateService){
    this.loadListData();
    this.pokemon_response = new Pokemon_response([]);
  }
  loadListData(){
  	console.log("Corre");
    this.subscription = this.ds
                            .getPokemonList()
                            .subscribe((res) => {
                              this.pokemon_response = res;
                              console.log(res);
                              setTimeout(() => {
                                    this.ds.setLoadingStatus(false);
                              }, 500);
                              
                            });
  }

  loadPokemonPage(name, index){
    
    this.ds.currentIndex=index;
    this.ds.setMenuStatus(false);
    this.$state.go("detail", {name: name});
  }


  ngOnInit(){
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}

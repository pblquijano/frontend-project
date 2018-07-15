import { Component, Input} from '@angular/core';
import { Pokemon_response } from '../../models/pokemon_response';;
import {DataService} from '../../data.service';
import {Subscription} from 'rxjs';
import { StateService } from '@uirouter/angular';
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
  public subscription;
  constructor(public ds:DataService, private $state: StateService){    
    this.pokemon_response = new Pokemon_response([]);
    this.loadListData();
  }
  loadListData(){
    //Consumes the service to obtain the pokémon list
    this.subscription = this.ds
                            .getPokemonList()
                            .subscribe((res) => {
                              this.pokemon_response = res;
                              setTimeout(() => {
                                    this.ds.setLoadingStatus(false);
                              }, 500);
                              
                            });
  }

  loadPokemonPage(name, index){
    //Sets the current index for show it in the side bar
    this.ds.currentIndex=index;
    this.ds.setMenuStatus(false);
    //Loads the pokemon detail view
    this.$state.go("detail", {name: name});
  }


  ngOnInit(){
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

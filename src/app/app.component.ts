import { Component } from '@angular/core';
import {DataService} from './data.service';
import {Subscription} from 'rxjs';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
//import { SideComponent } from './components/side-bar/side.component';
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
                animate(400, style({opacity: '0'}))
            ])
        ])
  ]
})
export class AppComponent {
  
  public watcher: Subscription;
  public activeMediaQuery = "";
  constructor(public ds:DataService, media: ObservableMedia){
    //Listens the changes in the window size
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';      
      if ( change.mqAlias == 'lg') {
        //Changes the open status of the sidebar
         this.ds.setMenuStatus(false);
      }
    });
   
  }
  ngOnInit(){
   
  }
  
  ngOnDestroy(){
    this.watcher.unsubscribe();
  }
}

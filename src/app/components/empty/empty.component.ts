import { Component } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']

})
export class EmptyComponent {
  	constructor(public ds:DataService){}
}

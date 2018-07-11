import { Type } from './type';
import { Sprites } from './sprites';

export class Pokemon{
	constructor(
		public id: number,
		public name: string,
		public sprites: Sprites,
		public types: Type[]	
	){

	}
}
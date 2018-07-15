import { Type } from './type';
import { Stat } from './stat';
import { Sprites } from './sprites';

export class Pokemon{
	constructor(
		public id: number,
		public name: string,
		public height: number,
		public base_experience: number,
		public weight: number,
		public sprites: Sprites,
		public types: Type[],
		public stats: Stat[]	
	){

	}
}
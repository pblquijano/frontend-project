export class Stat{
	constructor(
		public base_stat: number,
		public percent: number,	
		public stat: Stat_data
	){

	}

}

export class Stat_data{
	constructor(
		public url: string,
		public name: string		
	){

	}
}
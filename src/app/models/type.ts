export class Type{
	constructor(
		public slot: number,
		public type: Type_data
	){

	}

}

export class Type_data{
	constructor(
		public url: string,
		public name: string,
		public background: string,
		public color: string

			
	){

	}
}
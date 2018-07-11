export class Pokemon_response{
	constructor(
		public results: Pokemon_data[]
	){

	}
}
export class Pokemon_data{
	constructor(
		public url: string,
		public name:string	
	){

	}
}
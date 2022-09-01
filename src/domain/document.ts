import { Access } from './access';

export class Document {

	public id: string;

	public accesses: Access[];

	constructor(id: string, accesses: Access[] = []) {
		this.id = id;
		this.accesses = accesses;
	}

}
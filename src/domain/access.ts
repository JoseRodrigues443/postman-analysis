import { User } from './user';

export class Access {

	public user: User;

	public startDate: Date;

	constructor(user: User) {
		this.user = user;
		this.startDate = new Date();
	}

}
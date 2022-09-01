import { Access } from '../domain/access';
import { Document } from '../domain/document';
import { User } from '../domain/user';

function createAccess(request: any, response: any): Access {
	console.log(request.body)
	const docId = request.body.documentId;
	const document = new Document(docId)
	const userId = request.body.userId;
	const user = new User(userId)
	const access = new Access(user);
	document.accesses.push(access);
	return response.status(200).json(access);
}


export { createAccess }
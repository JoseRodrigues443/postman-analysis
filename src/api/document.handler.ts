import { Access } from '../domain/access';
import { Document } from '../domain/document';
import { User } from '../domain/user';

function getDocumentById(request: any, response: any): Document {
    console.log(request)
    const id = request.params.id;
    const user = new User('123')
    const accesses = [
        new Access(user)
    ];
    return response.status(200).json(new Document(id, accesses));
}


export { getDocumentById }
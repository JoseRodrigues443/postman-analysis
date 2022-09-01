import { createAccess } from "./api/access.handler";
import { getDocumentById } from "./api/document.handler";

const express = require( "express" );
const app = express();

app.get('/api/documents/:id', getDocumentById)

app.post('/api/accesses', createAccess)

// app.delete('/accesses', )

export default app;
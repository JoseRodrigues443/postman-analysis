import bodyParser from "body-parser";
import { createAccess } from "./api/access.handler";
import { getDocumentById } from "./api/document.handler";

const express = require( "express" );
const app = express();
// parse application/json
app.use(bodyParser.json())

app.get('/api/documents/:id', getDocumentById)

app.post('/api/accesses', createAccess)

// app.delete('/accesses', )

export default app;
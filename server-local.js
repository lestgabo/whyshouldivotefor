'use strict';

const app = require('./functions/server');
// allows localhost:9000 to be the server
app.listen(9001, () => console.log('Local server listening on port 9001!'));

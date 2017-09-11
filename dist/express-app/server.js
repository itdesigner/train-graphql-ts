"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("./application");
// let's set the port on which the server will run
app.application.set('port', 1337);
// start the server
app.application.listen(app.application.get('port'), () => {
    const port = app.application.get('port');
    console.log('GraphQL Reddit Server Running at http://127.0.0.1:' + port);
});
//# sourceMappingURL=server.js.map
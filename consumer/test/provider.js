const { Pact } = require("@pact-foundation/pact")
const path = require('path');
        
const userServiceProvider = new Pact({
    port: 3001,
    log: path.resolve(process.cwd(), "./test/pact/logs", "mockserver-integration.log"),
    dir: path.resolve(process.cwd(), "./test/pact/pacts"),
    spec: 2,
    consumer: "consumer",
    provider: "provider"
});

module.exports = userServiceProvider
const { Verifier } = require('@pact-foundation/pact');
const path = require('path');
const express = require('express');
const routes = require('../routes');

const port = 3001;
const app = express();
app.use(routes);
const server = app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


describe("Pact Verification", function() {
    it("validates the expectations of the client", function() {
        const opts = {
            logLevel: 'DEBUG',
            providerBaseUrl: `http://localhost:${port}`,
            provider: 'provider',
            providerVersion: '1.0.0',
            pactUrls: [
                path.resolve(__dirname, './consumer-provider.json')
            ]
        };

        return new Verifier(opts).verifyProvider().finally(() => {
            server.close();
        });
    })
});

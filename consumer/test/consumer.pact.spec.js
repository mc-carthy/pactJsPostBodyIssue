const consumer = require('../consumer');
const interactions = require('./interactions');
const provider = require('./provider');

describe('Pact generation', function() {
    before(async function() {
        this.timeout(10000);
        await provider.setup();
    })

    afterEach(async function() {
        await provider.verify();
    });

    after(async function() {
        this.timeout(10000);
        await provider.finalize();
    });

    it('should return a successfully added user', async function() {
        await provider.addInteraction(interactions.createUser);
        await consumer.createUser({ name: 'Test User' });
    });
});
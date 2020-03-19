module.exports = {
    createUser: {
        uponReceiving: 'A request to create a valid user',
        withRequest: {
            method: 'POST',
            path: '/users',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: {
                name: "Test User"
            }
        },
        willRespondWith: {
            status: 201,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: {
                id: 1,
                name: "Test user"
            }
        }
    },
}
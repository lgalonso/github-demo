// Include our router
const createRouter = require('./router');
// Our route should only expose the function `createRouter`,
// this should return us with an object containing the methods seen below.
const router = createRouter();

router.get('/', () => {
  return 'This is our root handler';
});

router.post('/users', () => {
  return 'This would create a new user';
});

router.put('/users/1', () => {
  return 'This would update a current user';
});

router.del('/users/1', () => {
  return 'This would delete the user with id 1';
});

router.error(() => {
  return 'The route you requested does not exist';
});

// We should get a correct response from these calls
const getResponse = router.dispatch('GET', '/');
const postResponse = router.dispatch('POST', '/users');
const putResponse = router.dispatch('PUT', '/users/1');
const delResponse = router.dispatch('DEL', '/users/1');

// This should print all of the messages defined above in our routes
console.log(getResponse, postResponse, putResponse, delResponse);

// These should give us our own error message (see above)
const invalidGetResponse = router.dispatch('GET', '/invalid');
const invalidPostResponse = router.dispatch('POST', '/dogs');
const invalidPutResponse = router.dispatch('GET', '/cat/1');
const invalidDelResponse = router.dispatch('GET', '/turtles/2');

// This should print the same error message for all
console.log(
  invalidGetResponse,
  invalidPostResponse,
  invalidPutResponse,
  invalidDelResponse
);

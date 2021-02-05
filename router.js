// Sebbe's solution
const ROUTES = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DEL': {}
  };
  
  let errorHandler = null;
  
  // We could validate all three arguments here
  function addRoute(method, path, callback) {
    ROUTES[method][path] = callback;
  }
  
  // All of our routing functions just pass along the arguments to `addRoute`
  function get(path, callback) {
    return addRoute('GET', path, callback);
  }
  
  function post(path, callback) {
    return addRoute('POST', path, callback);
  }
  
  function put(path, callback) {
    return addRoute('PUT', path, callback);
  }
  
  function del(path, callback) {
    return addRoute('DEL', path, callback);
  }
  
  // This just sets `errorHandler` to whatever callback we receive
  function error(callback) {
    errorHandler = callback;
  }
  
  function dispatch(method, path) {
    // Check if `method` exists, if it does check if `path` exists,
    // if it does we'll call it and return the response;
    if (ROUTES[method] !== undefined && ROUTES[method][path] !== undefined) {
      return ROUTES[method][path]();
    }
  
    if (errorHandler !== null) {
      return errorHandler();
    }
  
    return `Path [${path}] not found and no error handler has been set`;
  }
  
  // This function just exposes all of our functions
  function createRouter() {
    return {
      get,
      post,
      put,
      del,
      error,
      dispatch,
      routes: ROUTES
    };
  }
  
  // Export our module as a function
  module.exports = createRouter;
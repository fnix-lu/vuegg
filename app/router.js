module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.server);
  router.get('/client', controller.home.client);
};

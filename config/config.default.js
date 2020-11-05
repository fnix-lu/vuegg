/* eslint valid-jsdoc: "off" */

const path = require('path')

module.exports = appInfo => {
  const config = exports = {};

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public')
  }

  config.vuessr = {
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view')
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_abxy1129';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
